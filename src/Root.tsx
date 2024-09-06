import React from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";
 
export const Root: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [invites, setInvites] = React.useState<string[]>([]);
  React.useEffect(() => {}, [invites]);
  const toggle = (opened: boolean) => {
    setOpen(opened);
  };
  const invite = (name: string) => setInvites(invites.add(name));
  return (
    <>
      <button onClick={() => toggle(true)}>Open invites list</button>
      <Modal opened={isOpen} onClose={() => toggle(false)}>
        <Invites invites={invites} onAdd={(name: string) => invite(name)} />
      </Modal>
    </>
  );
};
