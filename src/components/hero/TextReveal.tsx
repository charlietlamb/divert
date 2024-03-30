import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../aceternity/TextRevealCard";

export default function TextReveal() {
  return (
    <TextRevealCard text="Guessing Games" revealText="Scale to 10k">
      <TextRevealCardTitle>
        Sometimes, you just need to see it.
      </TextRevealCardTitle>
      <TextRevealCardDescription>
        This is a text reveal card. Hover over the card to reveal the hidden
        text.
      </TextRevealCardDescription>
    </TextRevealCard>
  );
}
