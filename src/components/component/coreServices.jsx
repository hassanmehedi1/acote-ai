"use client";

import { InfiniteMovingCards } from "../ui/moving-cards";

export default function CoreServices() {
  return (
    <section className="bg-black">
      <div className="bg-black container mx-auto">
        <div className="py-3 flex items-center text-[18px] leading-[28px] text-[#2563EB] before:flex-[1_1_0%] before:border-t before:border-[#393939] before:me-6 after:flex-[1_1_0%] after:border-t after:border-[#393939] after:ms-6 font-semibold">
          Our Core Services
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "Software Development",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "AI Automation",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "Machine Learning",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Ai Chatbot",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "NLP AI",
  },
];
