import { Emotes } from "./enums";

export function getGroceryScenario(name, character) {
  const scenario = [
    {
      dialog:
        `Narrator: You're at the local grocery store when you spot an old acquaintance, ${character}.`,
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "Narrator: Okay, don't mess this up!",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: `Oh hey, ${name}!`,
      emote: Emotes.happy,
      buttons: []
    },
    {
      dialog: "I haven't seen you in a while, how have you been?",
      emote: Emotes.happy,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Good!",
                emote: Emotes.happy
              }
            });
          },
          text: `Good, and you?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "That's great to hear!",
                emote: Emotes.happy
              }
            });
          },
          text: `I have been doing excellent, how about you, ${character}?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "That's good, but I hope your day gets even better!",
                emote: Emotes.happy
              }
            });
          },
          text: "I'm alright."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              points: points + 1,
              gameCounter: gameCounter + 1,
              response: {
                dialog: "...Is that supposed to be a joke?",
                emote: Emotes.sad
              }
            });
          },
          text: "Well, it WAS going well..."
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: "So, I've been trying to move of my parents house. It's hard since I've been busy with work.",
      emote: Emotes.happy,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Yeah...! (Are you even listening?)",
                emote: Emotes.sad
              }
            });
          },
          text: "I’m glad to hear you’re doing fine!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog:
                  "I work at the local animal shelter, It's great knowing I'm making a difference!",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh, where do you work?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: "Oh, um, I guess...?",
                emote: Emotes.sad
              }
            });
          },
          text: "Your folks are SO lucky."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "Haha, well I guess we'll see! I've been thinking of moving out since graduating high school.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "You’re moving out? That’s so cool! Are you ready to live on your own?"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: `Narrator: At this point you notice ${character}'s shopping cart...`,
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver: "What is your problem?!",
              response: {
                dialog: "",
                emote: Emotes.sad
              }
            });
          },
          text: "Oh... I see you're finally addressing your weight problems."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "What?... I just like Mountain Dew.",
                emote: Emotes.neutral
              }
            });
          },
          text: "Ah, Mountain Dew. I see you’re quite cultured."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "You love Berry Berry Oats too? It’s the best cereal on the market!",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh, I love that cereal!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Haha, they're just SO affordable.",
                emote: Emotes.happy
              }
            });
          },
          text: "Instant Noodles… you're not still in college, are you?"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: "That's enough about me though. What have you been up to?",
      emote: Emotes.happy,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Oh, I certainly understand that.",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh, you know! Just busy with school and work."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Oh... it's always nice to take time to relax!",
                emote: Emotes.neutral
              }
            });
          },
          text: "I’m doing alright Just chillin', you know?."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: "Oh um...... I'm sorry to hear that...",
                emote: Emotes.sad
              }
            });
          },
          text:
            "Bad... I feel like my girlfriend doesn’t love me anymore. I’ve just been so lonely."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "Oh! I love Bell Taco! And, a lawyer?? That's so cool! My mom runs a practice, you know.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "I’ve been going to law school for awhile now and I also work at Bell Taco!"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "Narrator: You two have been blocking the aisle for a while now. It's time to wrap this conversation up!",
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Okay then, have a good day!",
                emote: Emotes.happy
              }
            });
          },
          text:
            "Well, it was great talking to you, but I've got to get going. See you!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: `(${character} watches as you walk away)`,
                emote: Emotes.sad
              }
            });
          },
          text: "(Walk away)"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "See you.",
                emote: Emotes.neutral
              }
            });
          },
          text: "...Okay then! See you."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "Of course!! I’d love that!",
                emote: Emotes.happy
              }
            });
          },
          text:
            "It was great talking to you again, can I have your contact info so we can keep in touch?"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "Narrator: As you can see, short encounters like these at the grocery store don’t have to be scary.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog:
        "Ask relevant questions to the other person and really listen to what they are saying.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog:
        "When answering questions, try to be specific and add to the conversation.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "Don’t let the other person carry the conversation.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog:
        "At the end, a simple farewell can neatly wrap a conversation and you can both walk away satisfied and happy to have seen each other.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog:
        "Remember conversations are supposed to opportunities to connect to other people.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog:
        "When you don’t contribute or avoid the conversation, you miss out on this valuable part of life.",
      emote: Emotes.neutral,
      buttons: []
    }
  ];

  return scenario;
}

export function getSchoolScenario(name, character) {
  const herPronoun = character === "Nana" ? "her" : "him";
  const scenario = [
    {
      dialog:
        "Narrator: You're at school sitting next to someone you don't know, five minutes before class starts.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: `Narrator: You should start a conversation with ${herPronoun}.`,
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "I'm doing pretty good.",
                emote: Emotes.happy
              }
            });
          },
          text: "Hi, how's it going?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Hi.",
                emote: Emotes.happy
              }
            });
          },
          text: "Hey."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Uh... Waiting for class to start?",
                emote: Emotes.sad
              }
            });
          },
          text: "What are you doing here?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver: "Bossing people around and acting entitled is not very sociable!",
              response: {
                dialog:  "",
                emote: Emotes.sad
              }
            });
          },
          text:
            "Get out of my spot! I need my space, perfect air temperature, and wheelie chair!"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: "So... How are you doing today?",
      emote: Emotes.happy,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: `I'm ${character}. Nice to meet you.`,
                emote: Emotes.happy
              }
            });
          },
          text:
            `I'm doing pretty good. My name's ${name}, by the way. What's your name?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: `What?? Why? Also, my name is ${character}.`,
                emote: Emotes.sad
              }
            });
          },
          text: `I actually hate life right now. I'm ${name}, by the way.`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: `Glad to hear. My name's ${character}.`,
                emote: Emotes.neutral
              }
            });
          },
          text:
            `Pretty good. Hey, I'm ${name}. What's your name?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog:
                  "Oh, SAME! I have three essays due tomorrow that I haven't even started on.",
                emote: Emotes.sad
              }
            });
          },
          text:
            `Okay, I guess. I'm struggling with some of these assignments right now. How about you?`
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "Narrator: Class will begin soon. How will you close your conversation?",
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                emote: Emotes.neutral,
                dialog: "Nice to meet you, too."
              }
            });
          },
          text:
            "Well hey, it's nice to meet you. I think I'll have a look over my notes before class."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                emote: Emotes.happy,
                dialog:
                  "Sure! I miss class sometimes and it'd be good to have a fallback."
              }
            });
          },
          text:
            "It's nice to meet you. Do you want to swap info so we can share notes if we get behind?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                emote: Emotes.neutral,
                dialog: "... See ya!"
              }
            });
          },
          text: "Alright, I'm gonna get my stuff now. Talk to you later!"
        },
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        `Narrator: So, you've had a decent first conversation with ${herPronoun}. Now, you have someone who you can talk to again in class!`,
      emote: Emotes.happy,
      buttons: []
    }
  ];
  return scenario;
}

export function getMarketScenario(name, character) {
  const shePronoun = character === "Nana" ? "she" : "he";
  const scenario = [
    {
      dialog:
        "Narrator: You are at the flea market when you see an old person yelling at the shopkeeper.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "WHY ARE THESE FIVE DOLLARS A PIECE! THEY USED TO BE THREE!!!",
      emote: Emotes.sad,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "BUT IT USED TO BE THREE!!!",
                emote: Emotes.sad
              }
            });
          },
          text: "It’s the shopkeeper’s decision."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: "Excuse me, youngin'!!! THIS IS BETWEEN ME AND HER!!!",
                emote: Emotes.sad
              }
            });
          },
          text: "SHUT UP! Stop your whining!"
        },

        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "SHE MADE HER REASONABLE PRICES ABHORRENT!!!",
                emote: Emotes.sad
              }
            });
          },
          text: "Excuse me, but what’s going on here?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver:
                "Okay, you avoided the situation. That may be a good decision, but maybe you could have done more.",
              response: {
                dialog: "",
                emote: Emotes.sad
              }
            });
          },
          text: "(Walk by)"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      emote: Emotes.sad,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog:
                  "AHH, you’re right. Well, forget about her. I’ll find someplace else!",
                emote: Emotes.neutral
              }
            });
          },
          text:
            "I know that things like this can be upsetting, but it’s not always a salesperson's choice when prices change."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Screw someplace else! This WAS affordable!",
                emote: Emotes.sad
              }
            });
          },
          text: "Why don’t you go shop for these somewhere else?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "Thank you for understanding.",
                emote: Emotes.neutral
              }
            });
          },
          text: "I’m sorry about your troubles."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog:
                  "Yeah well, now these prices are abhorrent!",
                emote: Emotes.sad
              }
            });
          },
          text: "SHUT IT!!! It’s HER choice"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        `Narrator: Okay, looks like ${shePronoun}'s calming down. Now, you can finish diffusing this situation.`,
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "We'll see.",
                emote: Emotes.sad
              }
            });
          },
          text: "Okay, well you two play nice!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver:
                "Would you stop yelling at people? The situation was calming down, but what you said made it worse than ever. Next time, be more sensitive!",
              response: {
                dialog: "",
                emote: Emotes.neutral
              }
            });
          },
          text: "WOULD YOU JUST SHUT UP!!!???"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Don't be silly, I'm on my way too!",
                emote: Emotes.neutral
              }
            });
          },
          text:
            "Okay, well I’m going to leave. Hopefully, y'all can play nice."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "Thank you. I think I let things get out of hand...",
                emote: Emotes.happy
              }
            });
          },
          text: "I’m sorry that things transpired like this."
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "I think I'll just take my business elsewhere. Sorry if I was rude.",
      emote: Emotes.happy,
      buttons: []
    },
    {
      dialog: "Narrator: Good job! You've helped diffuse the situation, I hope!",
      emote: Emotes.happy,
      buttons: []
    }
  ];
  return scenario;
}

export function getParkScenario(name, character) {
  const shePronoun = character === "Nana" ? "she" : "he";
  const herPronoun = character === "Nana" ? "her" : "him";
  const title = character === "Nana" ? "Mrs." : "Mr.";
  const scenario = [
    {
      dialog:
        `Narrator: You've ran into your new boss, ${character} at the park. You are walking opposite ways and ${shePronoun} appears as though ${shePronoun} wants to speak to you. How do you greet ${herPronoun}?`,
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "I'm doing alright.",
                emote: Emotes.happy
              }
            });
          },
          text: `Hi, ${title} Hoss, how are you doing?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Umm, what?",
                emote: Emotes.sad
              }
            });
          },
          text: `${character}! What is up, my dude?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "Very well!",
                emote: Emotes.neutral
              }
            });
          },
          text: `Salutations, ${title} Hoss. How do you do?`
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: "What's that supposed to mean?",
                emote: Emotes.sad
              }
            });
          },
          text: "Why are you here? You’re not the type I'd expect to see out in nature!"
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: `How are you today, ${name}?`,
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog:
                  "So high brow!",
                emote: Emotes.sad
              }
            });
          },
          text: "Dude, I’ve been watching TV nonstop."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "Pretty good! I've been working on my car!",
                emote: Emotes.happy
              }
            });
          },
          text: "Pretty good, actually. How’s your weekend?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              response: {
                dialog: "Oh, that's, uh... a real bummer...?",
                emote: Emotes.sad
              }
            });
          },
          text: "Not great. My mom won’t stop nagging at me for not cleaning my room."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 0,
              points: points + 2,
              response: {
                dialog: "Hmm. That's nice, I guess.",
                emote: Emotes.neutral
              }
            });
          },
          text: "Okay."
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "Well, I've been doing fine. How is that project that I assigned to you going?",
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog:
                  "Great! Just remember, it's due Tuesday, so allow plenty of time.",
                emote: Emotes.neutral
              }
            });
          },
          text: "I'm on track. It should be done shortly."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver: "It's called a filter. Learn to use it.",
              response: {
                dialog: "",
                emote: Emotes.neutral
              }
            });
          },
          text: "It sucks. You shouldn't have assigned me it."
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "Okay... looks like someone needs to get to work, then!",
                emote: Emotes.neutral
              }
            });
          },
          text: "I actually I haven't started it yet."
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog:
        "Narrator: So, how do you close this off smoothly?",
      emote: Emotes.neutral,
      buttons: [
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 3,
              response: {
                dialog: "See you at the office!",
                emote: Emotes.happy
              }
            });
          },
          text: "Alright, well I’d better get on with my walk. Good seeing you!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 2,
              response: {
                dialog: "See ya!",
                emote: Emotes.neutral
              }
            });
          },
          text: "Bye! (walks away)"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 4,
              response: {
                dialog: "See you Monday!",
                emote: Emotes.happy
              }
            });
          },
          text:
            "Okay, I’ll keep that project in mind. Well, I’m gonna take off now. See you Monday!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver:
                "Seriously, guy. Use a filter.",
              response: {
                dialog: "",
                emote: Emotes.sad
              }
            });
          },
          text: "Smell you later!"
        }
      ]
    }
  ];
  return scenario;
}
