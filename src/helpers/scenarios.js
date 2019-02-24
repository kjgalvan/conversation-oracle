import { Emotes } from "./enums";

export function getGroceryScenario(name) {
  var scenario = [
    // buttons
    {
      dialog:
        "You're at the local grocery store when you spot an old acquaintance.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "Your Brain: Okay, don't mess this up!",
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
              gameCounter: gameCounter + 3,
              points: points + 3,
              response: {
                dialog: "Good!",
                emote: Emotes.happy
              }
            });
          },
          text: "Good and you?"
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
          text: "I have been doing excellent, how about you?"
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
                emote: Emotes.neutral
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
          text: "It was going well until you came along."
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: "I've been trying to move of my parents house, and have been busy with work.",
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
          text: "I’m glad to hear you’re doing fine! "
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
                  "I work at the local animal shelter, It's great to know I'm making a difference!",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh, where do you work? "
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
          text: "Your folks are lucky. "
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
            "You’re moving out? That’s so cool! Are you ready to live on your own? "
        }
      ]
    },
    {
      dialog: "",
      emote: null,
      buttons: []
    },
    {
      dialog: "Narrator: At this point you notice their shopping cart...",
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
          text: "Oh I see you're finally addressing your weight problems."
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
                dialog: "A man of what? I just like Mountain Dew.",
                emote: Emotes.neutral
              }
            });
          },
          text: "Ah Mountain Dew, I see you’re a man of culture. "
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
                  "You love Berry Berry Oats too?? It’s the best cereal on the market.",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh, I love that cereal! "
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
                dialog: "Haha, they are just so affordable.",
                emote: Emotes.happy
              }
            });
          },
          text: "Instant Noodles… you didn’t tell me you were in college?"
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
                dialog: "Oh, I certainly understand that.",
                emote: Emotes.happy
              }
            });
          },
          text: "Oh you know, just busy with school and work. "
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
                dialog: "Oh, it's always nice to take time to relax!",
                emote: Emotes.neutral
              }
            });
          },
          text: "I’m doing alright, you know chilling. "
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
                dialog: "Oh um, I'm sorry to hear that...",
                emote: Emotes.sad
              }
            });
          },
          text:
            "Bad. I feel like my girlfriend doesn’t love me anymore. I’ve just been so lonely. "
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
                  "Oh I love Bell Taco! And a lawyer, that's cool. My mom runs a practice, you know.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "I’ve been going to law school a while now. I also work at Bell Taco, so I’ve been busy! "
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
        "Narrator: You two have been blocking the aisle for a while now. Time to wrap this conversation up!",
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
            "Well it was great talking to you, but I have to get going. See you!"
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
                dialog: "(They watch you walk away)",
                emote: Emotes.sad
              }
            });
          },
          text: "(Walk away) "
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
          text: "Okay then see you."
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
                dialog: "Yeah for sure, I’d like that!.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "It was great talking to you, can I have you’re contact info so we can keep in touch? "
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
export function getSchoolScenario(name) {
  var scenario = [
    // buttons
    {
      dialog:
        "Narrator: You're at school, sitting next to someone you don't know, five minutes before class starts.",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "Narrator: You should start a conversation with them.",
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
              points: points + 1,
              response: {
                dialog: "Waiting for class to star?",
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
              gameOver: "You seem confused, this is my assigned seat.",
              response: {
                dialog:  "Bossing people around and acting entitled is not very sociable!",
                emote: Emotes.sad
              }
            });
          },
          text:
            "Get out of my spot! I need my space, perfect air temperature, all that!"
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
              points: points + 2,
              response: {
                dialog: "I'm Icy, nice to meet you.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "I'm doing pretty good. My name's " +
            name +
            ", by the way. What's your name?"
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
                dialog: "What? Why? I'm Icy.",
                emote: Emotes.sad
              }
            });
          },
          text: "I hate life right now. I'm " + name + " Who the heck are you?"
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
                dialog: "Glad to hear. My name's Icy.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "Pretty good. Hey, I'm " + name + ". what's your name, by the way?"
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
                  "Oh, SAME. I have three essays due tomorrow that I haven't started on. And it's Icy.",
                emote: Emotes.sad
              }
            });
          },
          text:
            "Okay, I guess. I'm struggling with some of these assignments right now. What's your name?"
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
              points: points + 3,
              response: {
                emote: Emotes.neutral,
                dialog: "Nice to meet you, too."
              }
            });
          },
          text:
            "Well hey, nice to meet you. I think I'll have a look over my notes before class."
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
            "It's nice to meet you. Do you want to swap info so we can share notes?"
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
                emote: Emotes.neutral,
                dialog: "See ya!"
              }
            });
          },
          text: "Alright, I'm gonna get my stuff now. Talk to you later!"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver: "That was rude. Try manners next time.",
              response: {
                dialog: "You should try to get to know people before burning bridges.",
                emote: Emotes.sad
              }
            });
          },
          text: "You know, you're pretty weird."
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
        "Narrator: You've had a decent first conversation with them. Now, you have someone who you can talk to again when you go to class!",
      emote: Emotes.happy,
      buttons: []
    }
  ];
  return scenario;
}

export function getParkScenario(name) {
  var scenario = [
    {
      dialog:
        "Narrator: You meet your new boss, Mr. Hoss, at the park by chance. You are walking opposite ways and he appears as though he wants to speak with you. How do you greet him?",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "",
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
          text: "Hi, Mr. Hoss, how are you doing?"
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
                dialog: "Umm, what?",
                emote: Emotes.sad
              }
            });
          },
          text: "Brad! What is up, my dude?"
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
                dialog: "Very well!",
                emote: Emotes.neutral
              }
            });
          },
          text: "Salutations, Mr. Hoss. How do you do?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 1,
              gameOver: "You're not the type I expect to see in the office tomorrow",
              response: {
                dialog: "YOU'RE FIRED!!!",
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
      dialog: "How are you today, " + name + "?",
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
              response: {
                dialog:
                  "Oh, yeah, so high brow! There's just SO much quality entertainment out there...",
                emote: Emotes.sad
              }
            });
          },
          text: "Dude, I’ve been watching TV a lot more."
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
                emote: Emotes.sad
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
                dialog: "Oh, that's a REAL BUMMER...",
                emote: Emotes.sad
              }
            });
          },
          text: "My mom won’t stop nagging at me for not cleaning my room."
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
              response: {
                dialog:
                  "Kid, you'd better clean up your game right now, or next time, you're fired.",
                emote: Emotes.sad
              }
            });
          },
          text: "It sucks. You shouldn't have given me it."
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
                dialog: "Okay, looks like someone needs to get to work, then!",
                emote: Emotes.neutral
              }
            });
          },
          text: "I haven't started it yet."
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
                dialog: "Kid, clean your game up RIGHT NOW!!!",
                emote: Emotes.sad
              }
            });
          },
          text: "Come off it!"
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
        "How do you close this off smoothly?",
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
                emote: Emotes.neutral
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
              points: points + 1,
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
                "He might take that personally. That was not a good idea!",
              response: {
                dialog: "Bye, punk! (Well, THAT'S GOING ON MY REPORT...)",
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

export function getMarketScenario(name) {
  var scenario = [
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
          text: "It’s the shopkeeper’s decision. "
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
            "I know that things like this can be upsetting, but it’s not always a salespersons choice when prices change."
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
                  "Thank you, sweetie. I think I’m overreacting right now.",
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
                  "NO, because of HER CHOICE, these prices are abhorrent.",
                emote: Emotes.sad
              }
            });
          },
          text: "SHUT IT!!! IT’S HER CHOICE"
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
        "Narrator: Okay, looks like she's calming down. Now, you can finish diffusing this.",
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
                dialog: "Bye!",
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
                "Why did you do that? The situation was calming down, but what you said made it worse than ever? Next time, be more sensitive.",
              response: {
                dialog: "WELL EXCUSE ME!",
                emote: Emotes.sad
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
                dialog: "Great... Bye!",
                emote: Emotes.neutral
              }
            });
          },
          text:
            "Okay, well I’m going to leave. Hopefully, I’ve helped to diffuse this."
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
                  "Thank you, sweetie! I think that I let things get out of hand.",
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
        "Okay sweetie, I think that you've helped me to get things in check. Thank you!",
      emote: Emotes.happy,
      buttons: []
    },
    {
      dialog: "Narrator: Good job! You helped to diffuse the situation!",
      emote: Emotes.happy,
      buttons: []
    }
  ];
  return scenario;
}
