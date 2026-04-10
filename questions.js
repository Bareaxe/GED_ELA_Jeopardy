body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #0b1020;
  color: white;
}

header {
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  border-bottom: 3px solid #f1c40f;
}

header h1 {
  margin: 0;
  font-size: 2.4rem;
}

header p {
  margin-top: 8px;
  font-size: 1rem;
  color: #e0e0e0;
}

.controls {
  text-align: center;
  padding: 15px;
  background: #111a33;
}

.controls button {
  padding: 10px 18px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  background: #f1c40f;
  font-weight: bold;
  cursor: pointer;
}

.controls button:hover {
  background: #ffdd57;
}

#board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 20px;
}

.category {
  background: #1c2a52;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid #f1c40f;
}

.cell {
  background: #132047;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #2980b9;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  color: #f1c40f;
  transition: 0.2s;
}

.cell:hover {
  transform: scale(1.03);
  background: #1f2e63;
}

.cell.used {
  background: #2c3e50;
  border: 2px solid #555;
  color: #888;
  cursor: not-allowed;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111a33;
  border-top: 2px solid #f1c40f;
  margin-top: 15px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: #ffffff;
  color: #111;
  width: 85%;
  max-width: 750px;
  padding: 25px;
  border-radius: 12px;
  position: relative;
const jeopardyData = [
  {
    category: "Main Idea",
    questions: [
      {
        value: 100,
        question: "What does 'main idea' mean in a passage?",
        answer: "The main point or message the author wants to communicate.",
        explanation: "The main idea is what the whole passage is mostly about."
      },
      {
        value: 200,
        question: "Which strategy best helps you find the main idea quickly?",
        answer: "Read the first and last sentences of paragraphs.",
        explanation: "These often contain topic and concluding ideas."
      },
      {
        value: 300,
        question: "If a paragraph gives examples of recycling benefits, what is likely the main idea?",
        answer: "Recycling has positive effects on the environment.",
        explanation: "Examples support the main idea, not replace it."
      },
      {
        value: 400,
        question: "Which answer choice is usually NOT the main idea?",
        answer: "A small detail or one example from the passage.",
        explanation: "GED tricks often use a true detail as a wrong main idea."
      },
      {
        value: 500,
        question: "A passage argues that public transportation reduces pollution and traffic. What is the main idea?",
        answer: "Public transportation benefits cities by reducing pollution and congestion.",
        explanation: "Main idea combines the biggest repeated points."
      }
    ]
  },

  {
    category: "Tone & Purpose",
    questions: [
      {
        value: 100,
        question: "What does 'tone' describe?",
        answer: "The author’s attitude toward the topic.",
        explanation: "Tone can be neutral, critical, supportive, etc."
      },
      {
        value: 200,
        question: "If an author uses words like 'unfair' and 'outrageous,' the tone is likely:",
        answer: "Angry or critical.",
        explanation: "Strong emotional words indicate tone."
      },
      {
        value: 300,
        question: "What is the author’s purpose if they provide statistics and facts without opinions?",
        answer: "To inform.",
        explanation: "Informative writing explains rather than persuades."
      },
      {
        value: 400,
        question: "A passage encourages people to vote and explains why voting matters. Purpose?",
        answer: "To persuade.",
        explanation: "The author is trying to influence behavior."
      },
      {
        value: 500,
        question: "If the author praises a program but briefly mentions drawbacks, the tone is best described as:",
        answer: "Mostly positive but balanced.",
        explanation: "GED often tests subtle tone, not extreme emotion."
      }
    ]
  },

  {
    category: "Grammar & Editing",
    questions: [
      {
        value: 100,
        question: "Which is correct? 'Their going to the store.' or 'They're going to the store.'",
        answer: "They're going to the store.",
        explanation: "They're = they are."
      },
      {
        value: 200,
        question: "Which is correct? 'Its raining today.' or 'It's raining today.'",
        answer: "It's raining today.",
        explanation: "It's = it is. Its shows ownership."
      },
      {
        value: 300,
        question: "Which sentence is correct? 'Me and him went.' or 'He and I went.'",
        answer: "He and I went.",
        explanation: "Use subject pronouns for the subject."
      },
      {
        value: 400,
        question: "Choose the correct punctuation: 'I bought apples bananas and oranges.'",
        answer: "I bought apples, bananas, and oranges.",
        explanation: "Use commas in a list."
      },
      {
        value: 500,
        question: "Fix the run-on: 'She studied hard she passed the test.'",
        answer: "She studied hard, so she passed the test.",
        explanation: "You must separate independent clauses properly."
      }
    ]
  },

  {
    category: "Inference & Evidence",
    questions: [
      {
        value: 100,
        question: "What does it mean to make an inference?",
        answer: "To make a logical conclusion using clues from the text.",
        explanation: "Inference = reading between the lines."
      },
      {
        value: 200,
        question: "If a character grabs an umbrella before leaving, what can you infer?",
        answer: "It may be raining or expected to rain.",
        explanation: "You infer using common sense plus text clues."
      },
      {
        value: 300,
        question: "Which is the BEST evidence for an answer?",
        answer: "A sentence that directly supports the claim.",
        explanation: "GED evidence questions require proof."
      },
      {
        value: 400,
        question: "If an author says a plan is 'too expensive,' what inference can be made?",
        answer: "The author likely opposes the plan.",
        explanation: "Negative description implies disagreement."
      },
      {
        value: 500,
        question: "A passage says internet access is not available for everyone. What argument does this support?",
        answer: "Some people still need public resources like libraries.",
        explanation: "Inference connects details to larger claims."
      }
    ]
  },

  {
    category: "Extended Response",
    questions: [
      {
        value: 100,
        question: "What is the GED Extended Response?",
        answer: "A short essay where you compare arguments and use evidence.",
        explanation: "It tests writing and reasoning skills."
      },
      {
        value: 200,
        question: "What is the BEST structure for the GED essay?",
        answer: "Intro, body paragraphs with evidence, conclusion.",
        explanation: "Clear organization earns points."
      },
      {
        value: 300,
        question: "What should you always include in the body paragraphs?",
        answer: "Evidence from the text and explanation.",
        explanation: "Quotes or paraphrases must be explained."
      },
      {
        value: 400,
        question: "What is a strong thesis statement?",
        answer: "A clear claim about which argument is stronger and why.",
        explanation: "Your thesis must take a side."
      },
      {
        value: 500,
        question: "What is the biggest mistake GED writers make?",
        answer: "Giving opinions without using evidence from the passage.",
        explanation: "The GED essay is evidence-based, not personal opinion."
      }
    ]
  }
];