import React, { FC, ReactElement } from 'react';

type ChildProps = {
  name: string,
  id: number,
  bio?: string,
}

const Child: FC<ChildProps> = ({name, id, bio = 'Bio empty' }): ReactElement => { 
  return (
    <div>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
    </div>
  )
};

export function showChild() {
  return (
    <Child name="Billy" id={123} />
  )
}
export default Child;
