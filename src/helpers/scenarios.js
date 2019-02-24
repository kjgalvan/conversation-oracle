import { Emotes } from "./enums";

export function getGroceryScenario(name) {
  var scenario = [
      // buttons
      {
        dialog: "You're at the local grocery store when you spot an old acquaintance. It's too late to find another route and you already made eye contact.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "Your Brain: Okay, don't mess this up!",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "Brian: Oh hey, " + name + "!",
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
                  dialog: "Oh nice.",
                  emote: Emotes.happy,
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
                gameCounter: gameCounter+1,
                points: points + 4,
                response: {
                  dialog: "That's great to hear!",
                  emote: Emotes.happy,
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
                gameCounter: gameCounter+1,
                points: points + 2,
                response: {
                  dialog: "Yeah same.",
                  emote: Emotes.neutral,
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
                gameCounter: gameCounter+1,
                response: {
                  dialog: "Okay... ",
                  emote: Emotes.sad,
                  }
              });
            },
            text: "It was going well until you came along."
          },
        ]
      },
      {
        dialog: "",
        emote: null,
        buttons: []
      },
      {
        dialog: "I've been trying to move of my parents house plus work.",
        emote: Emotes.happy,
        buttons: [
          {
            onClick: () => {
              const { gameCounter } = this.state;
              const { points } = this.state;
              this.setState({
                ...this.state,
                gameCounter: gameCounter+1,
                points: points + 2,
                response: {
                  dialog: "Yeah! (Did they even listen)",
                  emote: Emotes.sad,
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
                gameCounter: gameCounter+1,
                points: points + 1,
                response: {
                  dialog: "I work at the local animal shelter, but my hear breaks every time we have put down one....",
                  emote: Emotes.sad,
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
                gameCounter: gameCounter+1,
                points: points + 1,
                response: {
                  dialog: "Oh, um, I guess.",
                  emote: Emotes.sad,
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
                gameCounter: gameCounter+1,
                points: points + 4,
                response: {
                  dialog: "Haha, well I think we'll see! I've been thinking of moving out since after high school.",
                  emote: Emotes.neutral,
                  }
              });
            },
            text: "You’re moving out? That’s so cool! Oh, but are you ready to live on your own? "
          },
        ]
      },
      {
        dialog: "",
        emote: null,
        buttons: []
      },
      {
        dialog: "Narrator: At this point you notice Brian's shopping cart...",
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
                  dialog: "Oh... uh.",
                  emote: Emotes.neutral,
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
                  emote: Emotes.neutral,
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
                  dialog: "You love Berry Berry Oats too?? It’s the best cereal on the market.",
                  emote: Emotes.happy,
                  }
              });
            },
            text: "That’s so crazy, we both like the same brand of cereal! "
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
                  emote: Emotes.happy,
                  }
              });
            },
            text: "Instant Noodles… you didn’t tell me you were in college. "
          },
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
                  dialog: "Wow, I can see why you’d be so busy.",
                  emote: Emotes.neutral,
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
                  dialog: "Oh, yeah I see.",
                  emote: Emotes.neutral,
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
                points: points + 3,
                response: {
                  dialog: "Oh um, I'm sorry to hear that...",
                  emote: Emotes.neutral,
                  }
              });
            },
            text: "Bad. I feel like my girlfriend doesn’t love me anymore. I’ve just been so lonely. "
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
                  dialog: "Oh I love Bell Taco! And a lawyer that's cool. My mom runs a practice you know.",
                  emote: Emotes.happy,
                  }
              });
            },
            text: "Hmm, well I’ve been going to college to become a lawyer for a while now. I also work at Bell Taco on campus there, so I’ve been pretty busy! "
          },
        ]
      },
      {
        dialog: "",
        emote: null,
        buttons: []
      },
      {
        dialog: "Narrator: You two are hogging the grocery lane for a while now. Time to wrap this conversation up! ",
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
                  dialog: "Okay then, have a good day!",
                  emote: Emotes.happy,
                  }
              });
            },
            text: "Well it was great talking to you, but I have to get going see you! "
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
                  dialog: "(Brian watches you walk away)",
                  emote: Emotes.neutral,
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
                  emote: Emotes.neutral,
                  }
              });
            },
            text: "Okay then see you. "
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
                  emote: Emotes.happy,
                  }
              });
            },
            text: "It was great talking to you, can I have you’re contact info so we can keep in touch? "
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
        "Narrator: Scene. As you can see, short encounters like these at the grocery store don’t have to be scary.",
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
        "When you don’t contribute or avoid the conversation you miss out on this valuable part of life.",
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
        "Narrator: You are at school, sitting next to a girl who you don't know, five minutes before class starts",
      emote: Emotes.neutral,
      buttons: []
    },
    {
      dialog: "You want to start a conversation with her.",
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
              points: points + 2,
              response: {
                dialog: "Hi. How's it going?",
                emote: Emotes.sad
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
              points: points + 0,
              gameOver: "Nice try. Try to be more considerate next time.",
              response: {
                dialog: "I got here first!",
                emote: Emotes.sad
              }
            });
          },
          text: "What are you doing here?"
        },

        {
          onClick: () => {
            console.log("Pressed");
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
      dialog: "How are you doing today?",
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
                dialog: "Ah, nice. And it's Sarah.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "I'm doing pretty good. My name's " +
            this.props.textWhat +
            ", by the way. What's your name?"
        },
        {
          onClick: () => {
            const { gameCounter } = this.state;
            const { points } = this.state;
            this.setState({
              ...this.state,
              gameCounter: gameCounter + 1,
              points: points + 0,
              response: {
                dialog: "What? Why? It's Sarah.",
                emote: Emotes.sad
              }
            });
          },
          text:
            "I hate life right now. I'm " +
            this.props.text +
            " Who the heck are you?"
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
                dialog: "My name's Sarah.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "Pretty good. Hey, I'm " +
            this.props.text +
            ". what's your name, by the way?"
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
                  "Oh, SAME. I have three essays due tomorrow that I haven't started on. And it's Sarah.",
                emote: Emotes.happy
              }
            });
          },
          text:
            "Okay, I guess. I'm struggling with assignments right now. What's your name?"
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
        "Narrator: You've had a pretty good conversation. How will you close it off smoothly?",
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
                emote: Emotes.happy
              }
            });
          },
          text:
            "Well hey, nice to meet you. Alright, I think I'll have a look over my notes before class."
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
                emote: Emotes.happy
              }
            });
          },
          text: "Okay, nice to meet you. Hey, can I add you on social media?"
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
                emote: Emotes.happy
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
              points: points + 0,
              gameOver: "That was rude. Try manners next time.",
              response: {
                emote: Emotes.sad
              }
            });
          },
          text: "You're weird. Alright, talk to you later!"
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
        "Narrator: You've had a decent first conversation with her. Now, you have someone who you can talk to again when you see her next!",
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
                dialog: "Umm, all's good in the hood, BRO.",
                emote: Emotes.neutral
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
              points: points + 0,
              response: {
                dialog: "(mockingly) Very well, my good sir.",
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
              points: points + 0,
              gameOver: "That was not nice. You just lost your job.",
              response: {
                dialog: "YOU'RE FIRED!!!",
                emote: Emotes.sad
              }
            });
          },
          text: "Why are you here? You’re rich!"
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
                emote: Emotes.sad
              }
            });
          },
          text: "Dude, I’ve been watching Family Guy a lot more."
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
              points: points + 0,
              response: {
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
              points: points + 1,
              response: {
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
                emote: Emotes.happy
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
              points: points + 0,
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
              points: points + 0,
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
              points: points + 0,
              response: {
                dialog: "Kid, clean your game up RIGHT NOW!!!",
                emote: Emotes.neutral
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
        "You’ve had both a friendly and a serious conversation so far. How do you close this off smoothly?",
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
              points: points + 0,
              response: {
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
                emote: Emotes.neutral
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
              points: points + 0,
              gameOver:
                "He might take that personally. That was not a good idea!",
              response: {
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
