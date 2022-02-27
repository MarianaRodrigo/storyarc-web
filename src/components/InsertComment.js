//packages imports
import { useRef } from "react";
import { nanoid } from "nanoid";
import { Transition } from "@headlessui/react";
import { FiSend } from "react-icons/fi";
//next imports
import Image from "next/image";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
//temp db
import db from "../../db.json";

export function InsertComment(postId) {
  const currentUser = useSelector(useUser);
  const commentInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (commentInput.current.value.lenght === 0) {
      alert(
        "É necessarios preencherem o campo de comentário para poderes submeter"
      );
    } else {
      const comment = {
        id: nanoid(),
        postId: postId,
        userId: currentUser.uid,
        body: commentInput.current.value,
      };
      db.comments.push(comment);
      commentInput.current.value = "";
    }
  }

  return (
    <Transition
      appear={true}
      show={true}
      as="form"
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
      className="bg-white px-4 py-2 border-b flex items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <div className="relative h-10 w-10 flex-none">
        <Image
          src={currentUser.avatar}
          alt={currentUser.name}
          layout="fill"
          priority
          className="rounded-full"
        />
      </div>
      <div className="flex flex-grow items-center bg-gray-200 rounded-full pr-4">
        <input
          ref={commentInput}
          type="text"
          placeholder="Escreve um comentário..."
          on
          className="flex-grow py-3 px-4 bg-gray-200 rounded-full text-sm font-light tracking-wider outline-none"
        />
        <FiSend
          className="flex-none w-6 h-6 cursor-pointer"
          onPress={handleSubmit}
        />
      </div>
    </Transition>
  );
}
