import React from "react";

const commentsData = [
  {
    name: "Manu Panjoria",
    comment: "Lorem Ipsum id",
    reply: [
      {
        name: "Manu Panjoria",
        comment: "Lorem Ipsum id",
        reply: [],
      },
    ],
  },
  {
    name: "Manu Panjoria",
    comment: "Lorem Ipsum id",
    reply: [
      {
        name: "Manu Panjoria",
        comment: "Lorem Ipsum id",
        reply: [
          {
            name: "Manu Panjoria",
            comment: "Lorem Ipsum id",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Manu Panjoria",
    comment: "Lorem Ipsum id",
    reply: [
      {
        name: "Manu Panjoria",
        comment: "Lorem Ipsum id",
        reply: [
          {
            name: "Manu Panjoria",
            comment: "Lorem Ipsum id",
            reply: [],
          },
          {
            name: "Manu Panjoria",
            comment: "Lorem Ipsum id",
            reply: [],
          },
          {
            name: "Manu Panjoria",
            comment: "Lorem Ipsum id",
            reply: [
              {
                name: "Manu Panjoria",
                comment: "Lorem Ipsum id",
                reply: [],
              },
              {
                name: "Manu Panjoria",
                comment: "Lorem Ipsum id",
                reply: [
                  {
                    name: "Manu Panjoria",
                    comment: "Lorem Ipsum id",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex items-center bg-gray-200 rounded-lg my-2">
      <img
        className="w-9 h-9"
        alt="img-logo"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      />

      <div className="py-3 px-2">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-l-black ml-3">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
