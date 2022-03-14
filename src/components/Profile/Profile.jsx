import React, { Component } from 'react';
import UserContext from '../../context/User';
import Details from '../common/details/Details';
import Tabs from '../common/tabs/Tabs';
import Tag from '../common/tag/Tag';
import UserImage from '../common/userImage/UserImage';
import Notes from '../Notes/Notes';
import './Profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      user: null,
    };
  }

  componentDidMount() {
    const user = this.context;

    this.setState({
      tabs: [
        {
          label: 'notes',
          component: <Notes />,
        },
        {
          label: 'details',
          component: (
            <Details
              user={{
                email: user?.email || '-',
                username: user?.username || '-',
                phone: user?.phone || '-',
              }}
            />
          ),
        },
      ],
      user,
    });
  }

  render() {
    const { tabs, user } = this.state;

    return (
      <section className="profile grad-01">
        <div className="profile-user p-2">
          <UserImage data={user?.email || '?'} radius={5} />
          <div className="profile-content">
            <div>{user?.email || '-'}</div>
            <div>{user?.username || '-'}</div>
          </div>
        </div>
        <div className="profile-tags p-2">
          <Tag label="green" color="green" />
          <Tag label="red" color="red" />
          <Tag label="blue" color="blue" />
          <Tag label="yellow" color="yellow" />
          <Tag label="purple" color="purple" />
          <Tag label="black" color="black" />
          <Tag label="brown" color="brown" />
        </div>
        <div className="divider-container mx-auto p-1">
          <hr className="divider" />
        </div>
        <Tabs tabs={tabs} />
      </section>
    );
  }
}

Profile.contextType = UserContext;
