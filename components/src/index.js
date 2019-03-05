import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div> 
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Lorem Ipsum 1"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="Lorem Ipsum 2"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="Lorem Ipsum 3"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));