import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diegoardais.png',
      name: 'Diego Ardais',
      role: 'Front End @ Creatus',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio',
      },
      { type: 'link', content: 'github.com/diegoardais.com' },
    ],
    publishedAt: new Date('2023-06-13 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Pedro Ardais',
      role: 'Psychologist',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      {
        type: 'paragraph',
        content: 'Acabei de publicar um novo artigo!',
      },
      { type: 'link', content: 'github.com/diegoardais.com' },
    ],
    publishedAt: new Date('2023-06-12 10:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
