import {
  MonitorSmartphone,
  NotepadText,
  PhoneCall,
  RadioTower,
  Swords,
  UserRoundCheck,
} from "lucide-react";

const className =
  "text-slate-900 md:min-h-24 min-w-10 lg:min-w-40 md:min-w-24 min-h-16";

export const rocketList = [
  {
    title: "Fill out a detailed onboarding form",
    text: "The form takes 7 minutes to complete and allows us to collect everything we need to build your page.",
    icon: <NotepadText className={className} strokeWidth={2.5} />,
  },
  {
    title: "Kick Off Call",
    text: "The kick-off call allows us to meet your team, clarify your goals, and discuss any special requests that you need for your landing pages.",
    icon: <PhoneCall className={className} strokeWidth={2.5} />,
  },
  {
    title: "Mapping out the entire customer journey",
    text: "The Divert team map out the entire customer journey from creative, to checkout process and post-sale automations.",
    icon: <UserRoundCheck className={className} />,
  },
  {
    title: "Strategy, Positioning & Copywriting",
    text: "Our CRO experts undergo brand research, positioning and copywriting for your page.",
    icon: <Swords className={className} strokeWidth={2.5} />,
  },
  {
    title: "Mobile & Desktop Design",
    text: "Using your brand book and guidelines, we bring your landing page to life. All DIVERT landing pages are designed responsively for desktop and mobile.",
    icon: <MonitorSmartphone className={className} strokeWidth={2.5} />,
  },
  {
    title: "Your LP goes LIVE!",
    text: "We develop your landing page, and once it’s complete, we implement our tracking system and transfer the fully developed page to you. Now it is time to run some traffic.",
    icon: <RadioTower className={className} strokeWidth={2.5} />,
  },
];
