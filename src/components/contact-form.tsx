"use client";

import { useForm, ValidationError } from "@formspree/react";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type HistoryEntry = {
  type: "prompt" | "response" | "error" | "loading";
  content: string;
};

export const ContactForm = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formState, formHandleSubmit] = useForm("mgvavwyk");

  const [stage, setStage] = useState<
    "idle" | "name" | "email" | "message" | "complete" | "sending" | "clearing"
  >("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "response", content: "Welcome to the contact terminal." },
    { type: "response", content: 'Type "start" to begin...' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus the input field
    inputRef.current?.focus();

    // Scroll to bottom of terminal when history updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Ctrl+Z or Ctrl+C
      if (e.ctrlKey && (e.key === "z" || e.key === "c") && stage !== "idle") {
        e.preventDefault();
        exitFlow(`^${e.key.toUpperCase()}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stage]);

  const validateEmail = (email: string): boolean => {
    // Simple email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const clearTerminal = () => {
    // Set stage to clearing to disable input temporarily
    setStage("clearing");

    // Add the clear command to history
    setHistory((prev) => [...prev, { type: "prompt", content: "clear" }]);

    // Clear the terminal after a brief delay
    setTimeout(() => {
      setHistory([]);

      // Show the welcome message after 0.5 second
      setTimeout(() => {
        setHistory([
          { type: "response", content: "Welcome to the contact terminal." },
          { type: "response", content: 'Type "start" to begin...' },
        ]);
        setStage("idle");
      }, 500);
    }, 100);
  };

  const exitFlow = (exitCommand: string) => {
    setHistory((prev) => [
      ...prev,
      { type: "prompt", content: exitCommand || "exit" },
      {
        type: "response",
        content: `Process terminated by ${exitCommand || "exit"} command.`,
      },
      { type: "response", content: 'Type "start" to begin a new session...' },
    ]);
    setStage("idle");
    setName("");
    setEmail("");
    setMessage("");
  };

  const simulateMessageSending = (
    currentMessage: string,
    e: React.FormEvent
  ) => {
    setStage("sending");

    // Add initial loading message
    setHistory((prev) => [
      ...prev,
      { type: "loading", content: "Preparing message..." },
    ]);

    // Simulate progress by replacing the last loading message
    setTimeout(() => {
      setHistory((prev) => [
        ...prev.slice(0, -1), // Remove the last loading message
        { type: "loading", content: "Validating input data... Done" },
      ]);
    }, 700);

    setTimeout(() => {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "loading", content: "Encrypting message content... Done" },
      ]);
    }, 1400);

    setTimeout(() => {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "loading", content: "Establishing secure connection... Done" },
      ]);
    }, 2100);

    setTimeout(() => {
      setHistory((prev) => [
        ...prev.slice(0, -1),
        { type: "loading", content: "Sending message... Done" },
      ]);
    }, 2800);

    // Complete the process
    setTimeout(async () => {
      // Log the submission data with the correct message value
      console.log({
        name,
        email,
        message: currentMessage,
      });

      // Create a field values object and send to formhandleusbmimt
      try {
        const fieldValues = {
          name,
          email,
          message: currentMessage,
        };
        formHandleSubmit(fieldValues);

        setHistory((prev) => [
          ...prev.slice(0, -1), // Remove the last loading message
          { type: "response", content: "Message sent successfully!" },
          { type: "response", content: "Thank you for your submission." },
          {
            type: "response",
            content: 'Type "start" to send another message.',
          },
        ]);
      } catch (error) {
        setHistory((prev) => [
          ...prev.slice(0, -1), // Remove the last loading message
          { type: "response", content: "Failed to send message." },
          { type: "response", content: "Please try again later." },
          { type: "response", content: 'Type "start" to try again.' },
        ]);
      }
      setStage("idle");
    }, 3500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inputLower = currentInput.toLowerCase();
    const promptPrefix = stage === "idle" ? "$ " : "> ";
    const promptContent = `${promptPrefix}${currentInput}`;

    // Check for clear command
    if (inputLower === "clear") {
      clearTerminal();
      setCurrentInput("");
      return;
    }

    // Check for exit commands
    if (
      inputLower === "exit" ||
      inputLower === "quit" ||
      inputLower === "cancel"
    ) {
      exitFlow(currentInput);
      setCurrentInput("");
      return;
    }

    if (stage === "idle" && inputLower === "start") {
      // If starting again after completion, reset form data and history
      if (name || email || message) {
        setHistory([
          { type: "response", content: "Welcome to the contact terminal." },
          { type: "response", content: 'Type "start" to begin...' },
          { type: "prompt", content: promptContent },
          { type: "response", content: "Please enter your name:" },
        ]);
        // Reset all form data
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          { type: "response", content: "Please enter your name:" },
        ]);
      }
      setStage("name");
    } else if (stage === "name") {
      if (currentInput.trim() === "") {
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          {
            type: "error",
            content: "Name cannot be empty. Please enter your name:",
          },
        ]);
      } else {
        setName(currentInput);
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          { type: "response", content: "Please enter your email:" },
        ]);
        setStage("email");
      }
    } else if (stage === "email") {
      if (!validateEmail(currentInput)) {
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          {
            type: "error",
            content: "Invalid email format. Please enter a valid email:",
          },
        ]);
      } else {
        setEmail(currentInput);
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          { type: "response", content: "Please enter your message:" },
        ]);
        setStage("message");
      }
    } else if (stage === "message") {
      if (currentInput.trim() === "") {
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
          {
            type: "error",
            content: "Message cannot be empty. Please enter your message:",
          },
        ]);
      } else {
        setMessage(currentInput);
        setHistory((prev) => [
          ...prev,
          { type: "prompt", content: promptContent },
        ]);

        // Pass the currentInput to simulateMessageSending
        simulateMessageSending(currentInput, e);
      }
    }

    setCurrentInput("");
  };

  // Handle terminal click to focus input
  const handleTerminalClick = () => {
    if (stage !== "sending" && stage !== "clearing") {
      inputRef.current?.focus();
    }
  };

  if (!mounted) {
    // Optionally, you can return a loader here while the component mounts
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        ref={terminalRef}
        className={cn(
          "p-4 rounded-lg border font-mono text-left cursor-text",
          "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]",
          resolvedTheme === "dark"
            ? "bg-black text-slate-300 border-slate-700"
            : "bg-white text-slate-800 border-slate-300"
        )}
        onClick={handleTerminalClick}
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === "prompt" ? (
              <span className="text-slate-700 dark:text-slate-300">
                {line.content}
              </span>
            ) : line.type === "response" ? (
              <span className="text-slate-600 dark:text-slate-400">
                {line.content}
              </span>
            ) : line.type === "error" ? (
              <span className="text-red-500">{line.content}</span>
            ) : line.type === "loading" ? (
              <span className="text-yellow-500 dark:text-yellow-400">
                <span className="inline-block mr-2">⟳</span>
                {line.content}
              </span>
            ) : null}
          </div>
        ))}
        {stage !== "sending" && stage !== "clearing" && (
          <form onSubmit={handleSubmit} className="flex items-center">
            {stage === "idle" ? (
              <span className="mr-2 text-slate-500">$ </span>
            ) : (
              <span className="mr-2 text-slate-500">&gt; </span>
            )}
            <div className="relative flex-grow">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="bg-transparent outline-none w-full text-slate-700 dark:text-slate-300"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
