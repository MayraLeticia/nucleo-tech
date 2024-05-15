import React, { useEffect, useState } from 'react'; 
import "./style.scss";
import courses from '../../constants/cursos';
import { Card, Link } from '../../components';
import axios from "axios";



const ListaCursos = () => {
  const [cursos, setCursos] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/cursos").then((res)=>{
      setCursos(res.data);
    })
  },[])


  return (
    <div className="course-list">
      {courses.map((cursos) => (
        //duvida aq: key={cursos.id} não te isso no component
        <Link key={cursos.id} href={"curso/" + cursos.id}>
          <Card
            key={cursos.index}
            Icon={cursos.icon} 
            tutorName={cursos.author} 
            courseName={cursos.nome}
            describe={cursos.describe}
            rate={cursos.rate}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListaCursos;