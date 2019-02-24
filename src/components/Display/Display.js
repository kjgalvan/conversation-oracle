import React from 'react';
import { Emotes, Characters } from '../../helpers/enums';
import nanaNeutral from '../../images/nana-neutral.png';
import nanaHappy from '../../images/nana-happy.png';
import nanaSad from '../../images/nana-sad.png';
import popoNeutral from '../../images/popo-neutral.png';
import popoHappy from '../../images/popo-happy.png';
import popoSad from '../../images/popo-sad.png';

class Display extends React.Component{
  getImageSrc = (character, emote) => {
    switch (character) {
      case Characters.nana:
        switch (emote) {
          case Emotes.neutral: return nanaNeutral;
          case Emotes.happy: return nanaHappy;
          case Emotes.sad: return nanaSad;
          default: return nanaNeutral;
        }
      case Characters.popo:
        switch (emote) {
          case Emotes.neutral: return popoNeutral;
          case Emotes.happy: return popoHappy;
          case Emotes.sad: return popoSad;
          default: return popoNeutral;
        }
      default: return nanaNeutral;
    }
  }

  render() {
    const { character, emote } = this.props;
    const imageSrc = this.getImageSrc(character, emote);
    return (
      <div className={this.props.className}>
        {(character && emote) ? <img src={imageSrc} alt={`${character}-${emote}`} /> : null}
      </div>
    );
  }
}

export default Display;
