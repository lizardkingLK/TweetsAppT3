import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import Link from "next/link";

type PostsWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostsWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profilePicture}
        width={50}
        height={50}
        alt={author.name}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 font-bold">
          <Link href={`/@${author.name}`}>
            <span className="text-slate-300">{`@${author.name}`}</span>
          </Link>
          <span>{` • ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <Link href={`/post/${post.id}`}>
          <span>{post.content}</span>
        </Link>
      </div>
    </div>
  );
};
