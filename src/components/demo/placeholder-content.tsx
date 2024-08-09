import React from 'react'

type Title = {
  title: string;
};
const placeholder = ({title}:Title) => {
  return (
    <div>placeholder-content {title}</div>
  )
}

export default placeholder