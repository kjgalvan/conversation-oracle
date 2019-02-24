import { Emotes } from './enums';

export function getGroceryScenario(name) {
  var scenario = [
      // buttons
      {
        dialog: "You're at the local grocery store when you spot an old acquantance. It's too late to find another route and you already made eye contact.",
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
        // onClick: () => { 
        //   const { gameCounter } = this.state;
        //   this.setState({
        //     ...this.state,
        //     gameCounter: gameCounter+1,
        //     response: {
        //       dialog: "",
        //       emote: Emotes.happy,
        //     }
        //   });
        // },
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
              this.setState({
                ...this.state,
                gameCounter: gameCounter+1,
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
              this.setState({
                ...this.state,
                gameCounter: gameCounter+1,
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
              this.setState({
                ...this.state,
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
              this.setState({
                ...this.state,
                gameCounter: gameCounter+1,
                response: {
                  dialog: "Okay... ",
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
            onClick: () => { console.log("Pressed"); },
            text: "Your folks are lucky. "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "You’re moving out? That’s so cool! Oh, but are ready to live on your own? "
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
            onClick: () => { console.log("Pressed"); },
            text: "Oh I see you’re buying Plan B how fun! "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "Ah Mountain Dew, I see you’re a man of culture. "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "That’s so crazy, we both like the same brand of cereal! "
          },
          {
            onClick: () => { console.log("Pressed"); },
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
            onClick: () => { console.log("Pressed"); },
            text: "Oh you know, just busy with school and work. "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "I’m doing alright, you know chilling. "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "Bad. I feel like my girlfriend doesn’t love me anymore. I’ve just been so lonely. "
          },
          {
            onClick: () => { console.log("Pressed"); },
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
            onClick: () => { console.log("Pressed"); },
            text: "Well it was great talking to you, but I have to get going see you! "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "(Walk away) "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "Okay then see you. "
          },
          {
            onClick: () => { console.log("Pressed"); },
            text: "It was great talking to you, can I have you’re contact info so we can keep in touch? "
          },
        ]
      },
      {
        dialog: "",
        emote: null,
        buttons: []
      },
      {
        dialog: "Narrator: Scene. As you can see, short encounters like these at the grocery store don’t have to be scary.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "Ask relevant questions to the other person and really listen to what they are saying.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "When answering questions, try to be specific and add to the conversation.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "Don’t let the other person carry the conversation.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "At the end, a simple farewell can neatly wrap a conversation and you can both walk away satisfied and happy to have seen each other.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "Remember conversations are supposed to opportunities to connect to other people.",
        emote: Emotes.neutral,
        buttons: []
      },
      {
        dialog: "When you don’t contribute or avoid the conversation you miss out on this valuable part of life.",
        emote: Emotes.neutral,
        buttons: []
      }
    ]

    return scenario;
  }