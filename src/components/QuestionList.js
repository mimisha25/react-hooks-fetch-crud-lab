import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setInfo(data));
  }, []);
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => setInfo(info.filter(item => item.id !== id)));
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{info.map( data => <QuestionItem key={data.id} question={data} onDelete={handleDelete} /> )}</ul>
    </section>
  );
}

export default QuestionList;