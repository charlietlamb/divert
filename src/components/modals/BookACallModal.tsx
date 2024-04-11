import ButtonRound from "../buttons/ButtonRound";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function BookACallModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonRound className="text-lg">Book A Call</ButtonRound>
      </DialogTrigger>
      <DialogContent className="border-slate-200 bg-slate-900">
        book a call..
      </DialogContent>
    </Dialog>
  );
}
