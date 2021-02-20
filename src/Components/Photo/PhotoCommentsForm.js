import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import Error from '../../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { error, request } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
