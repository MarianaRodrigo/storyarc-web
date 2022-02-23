/* eslint-disable @next/next/no-img-element */
import React from "react";
import db from "../../db.json";

export default function CommentCell() {

  /*
  const comments = db.comments.filter(
    (comments) => comments.postId === post.id
  ); */
  
  return (
    <div className="flex mx-4 w-full">
      <div
       /* data={comments}
        initialNumToRender={10}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem comentários" />} 
        renderItem={({ body }) => <CommentCell comment={body} />}
        keyExtractor={(body) => body.id} */
      


      />
      <img
        className="w-10 h-10 rounded-full mr-4"
        src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <input
          type="text"
          placeholder="Escreve um comentário..."
          className="w-full py-2 px-5 bg-gray-200 rounded-full text-sm font-light tracking-wider outline-none"
        />
    </div>
  );
}
