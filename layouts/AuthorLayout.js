import SocialIcon from '@/components/social-icons';
import { PageSEO } from '@/components/SEO';

export default function AuthorLayout({ children, frontMatter }) {
  const { name, occupation, company, email, linkedin, github } = frontMatter;

  return (
    <>
      <PageSEO title={`Resume - ${name}`} description={`My Resume - ${name}`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            Resume
          </h1>
        </div>
        <div className="items-start">
          <div className="darK:bg-slate-100 flex flex-col items-center justify-around rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row">
            <h3 className="py-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="dark:text-gray-4004 ml-2 text-gray-500"> {company}</div>
            <div className="flex space-x-3 py-6 px-4 md:py-0 md:px-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
              <SocialIcon kind="github" href={github} size={5} />
              <SocialIcon kind="linkedin" href={linkedin} size={5} />
            </div>
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            <div className="prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </p>
        </p>
      </div>
    </>
  );
}
