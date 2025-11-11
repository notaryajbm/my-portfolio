import { useEffect, useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Github, Star, GitFork } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Tilt from 'react-parallax-tilt';

import {
  faReact,
  faNodeJs,
  faPython,
  faGithub,
  faJs,
  faLinux,
  faWindows,
  faDiscord,
  faHtml5,
  faCss,
  faFigma,
  faMarkdown,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

const emojiImages = ["1.png", "2.png"];

function useRandomEmojis(count, emojis) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        src: emojis[i % emojis.length],
        top: `${Math.random() * 50 + 25}%`,
        left: `${Math.random() * 60 + 20}%`
      })),
    [count, emojis]
  );
}

const Index = () => {
  const techStack = [
    { icon: faWindows },
    { icon: faLinux },
    { icon: faGithub },
    { icon: faFigma },
    { icon: faHtml5 },
    { icon: faCss },
    { icon: faJs },
    { icon: faNodeJs },
    { icon: faVuejs },
    { icon: faReact },
    { icon: faPython },
    { icon: faMarkdown }
  ];

  const [projects, setProjects] = useState([]);
  const backgroundEmojis = useRandomEmojis(2, emojiImages);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const cache = localStorage.getItem("githubRepos");
        const cacheTime = localStorage.getItem("githubReposTime");
        const now = new Date().getTime();
        const CACHE_DURATION = 10 * 60 * 1000;

        if (cache && cacheTime && now - parseInt(cacheTime, 10) < CACHE_DURATION) {
          setProjects(JSON.parse(cache));
          return;
        }

        const response = await fetch(
          "https://api.github.com/users/notaryagg/repos?sort=updated&per_page=9"
        );
        if (!response.ok) throw new Error(`github api returned ${response.status}`);

        const data = await response.json();
        const filtered = data.map((repo) => ({
          name: repo.name,
          description: repo.description || "no description provided.",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url
        }));

        setProjects(filtered);
        localStorage.setItem("githubRepos", JSON.stringify(filtered));
        localStorage.setItem("githubReposTime", now.toString());
      } catch (error) {
        console.error("failed to fetch github repos", error);
      }
    }
    fetchRepos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <div
        className="pointer-events-none select-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {backgroundEmojis.map(({ src, top, left }, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none opacity-20 z-0"
          style={{
            position: "absolute",
            top,
            left,
            width: "10rem",
            height: "10rem",
            userSelect: "none"
          }}
        />
      ))}

      <div className="container mx-auto max-w-5xl px-6 py-12 relative z-10">
      <motion.header
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-8"
>
  <h1 className="term-line text-5xl font-mono font-bold mb-4 mt-8">
    arya<span className="text-mocha-overlay2">@</span>
    <span className="text-mocha-mauve">arch</span>
  </h1>

  <p className="term-line font-mono text-mocha-text mb-4">
    a self-taught dev from iran. i enjoy coding & gaming.
  </p>

  <div className="flex gap-4">
    <a
      href="https://github.com/notaryajbm"
      className="text-foreground hover:text-mocha-mauve transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="h-6 w-6" />
    </a>
    <a
      href="https://discordapp.com/users/933613340876505118"
      className="text-foreground hover:text-mocha-mauve transition-colors"
    >
      <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />
    </a>
  </div>
</motion.header>


        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="term-line text-2xl font-bold mb-6 font-mono text-mocha-lavender">cat stack.txt</h2>
          <div className="flex flex-wrap gap-5">
           {techStack.map((tech, index) => (
  <Tilt
    key={index}
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    perspective={1000}
    scale={1.1}
    glareEnable={true}
    className="p-3 rounded-lg bg-card border border-border hover:border-mocha-mauve/80 transition-colors"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <FontAwesomeIcon icon={tech.icon} className="h-8 w-8 text-foreground" />
    </motion.div>
  </Tilt>
))}

          </div>
        </motion.section>
<div className="absolute inset-0 -z-10 pointer-events-none">
  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-3xl top-0 left-0 animate-float" />
 <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-15 blur-3xl bottom-0 right-0 animate-float-reverse" />

</div>

      <motion.section
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mb-14"
>
  <h2 className="term-line text-2xl font-bold mb-6 font-mono text-mocha-lavender">
    cat projects.txt
  </h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
    {projects.length === 0 ? (
      <p className="text-muted-foreground col-span-full text-center">
        loading projects...
      </p>
    ) : (
      projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-full"
        >
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1000}
            scale={1.1}
            glareEnable={true}
            className="inline-block w-full h-full overflow-hidden rounded-lg"
          >
            <Card className="flex flex-col h-full p-5 bg-card border border-border rounded-lg shadow-md transition-colors duration-300 hover:border-mocha-mauve">
         <div className="flex items-center gap-2.5 mb-3.5">
  <FontAwesomeIcon icon={faLink} className="h-4.5 w-4.5 text-muted-foreground" />
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-semibold text-foreground font-mono transition-colors duration-300 hover:text-mocha-mauve"
  >
    {project.name}
  </a>
</div>

              <p className="text-sm text-muted-foreground leading-snug mb-5 flex-grow">
                {project.description}
              </p>
              <div className="mt-auto flex items-center gap-6 text-sm text-muted-foreground font-sans">
                <span className="flex items-center gap-1">
                  <Star className="h-4.5 w-4.5" />
                  {project.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-4.5 w-4.5" />
                  {project.forks.toLocaleString()}
                </span>
              </div>
            </Card>
          </Tilt>
        </motion.div>
      ))
    )}
  </div>
</motion.section>


        <motion.footer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t-2 border-mocha-overlay1/70 pt-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground font-mono
"
        >
          <span className="term-line text-mocha-subtext1">cat footer.txt</span>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <img
              src="https://api.statusbadges.me/badge/vscode/933613340876505118?style=plastic"
              alt="vscode"
              loading="lazy"
              className="order-1"
            />
            <img
              src="https://api.statusbadges.me/badge/status/933613340876505118?simple=true&style=plastic"
              alt="status"
              loading="lazy"
              className="order-2"
            />
            <a
              href="https://api.statusbadges.me/openspotify/933613340876505118"
              target="_blank"
              rel="noopener"
              className="inline-block order-3 md:order-none md:ml-4"
            >
              <img
                src="https://api.statusbadges.me/badge/spotify/933613340876505118?style=plastic"
                alt="spotify"
                loading="lazy"
              />
            </a>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Index;
