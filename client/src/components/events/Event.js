// Single event page
import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MusicEventContext from '../../context/musicEvent/musicEventContext';

const Event = ({ match }) => {
    // Init musicEventContext
    const musicEventContext = useContext(MusicEventContext);
    const { getEvent } = musicEventContext;

    // // eslint warning suggestion actually breaks code upon implementation
    // useEffect(() => {
    //     getEvent(match.params.login);
    //     getEventRepos(match.params.login);
    //     // eslint-disable-next-line
    // }, []);

    // Props
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company,
    } = user;

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable:{' '}
            {hireable ? (
                <i className='fa fa-check text-success' />
            ) : (
                <i className='fa fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
                {/* Grid item 1 */}
                <div className='all-center'>
                    <img
                        src={avatar_url}
                        className='round-img'
                        alt=''
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                {/* Grid item 2 */}
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Eventname: </strong>
                                    {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong>
                                    {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong>
                                    {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>
                    Followers: {followers}
                </div>
                <div className='badge badge-success'>
                    Following: {following}
                </div>
                <div className='badge badge-light'>
                    Public Repos: {public_repos}
                </div>
                <div className='badge badge-dark'>
                    Public Gists: {public_gists}
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );
};

export default Event;
