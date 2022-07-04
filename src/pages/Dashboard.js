import TinderCard from 'react-tinder-card';
import { useEffect, useState } from 'react';
import ChatContainer from '../components/ChatContainer';
// import {useCookies} from 'react-cookie'
// import axios from 'axios'

const Dashboard = () => {
	const characters = [
		{
			name: 'Richard Hendricks',
			url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			name: 'Erlich Bachman',
			url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			name: 'Monica Hall',
			url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			name: 'Jared Dunn',
			url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			name: 'Dinesh Chugtai',
			url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		},
	];
	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log('removing: ' + nameToDelete);
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + ' left the screen!');
	};
	// const [user, setUser] = useState(null);
	// const [genderedUsers, setGenderedUsers] = useState(null);
	// const [lastDirection, setLastDirection] = useState();
	// const [cookies, setCookie, removeCookie] = useCookies(['user']);

	// const userId = cookies.UserId;

	// const getUser = async () => {
	// 	try {
	// 		const response = await axios.get('http://localhost:8000/user', {
	// 			params: { userId },
	// 		});
	// 		setUser(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// const getGenderedUsers = async () => {
	// 	try {
	// 		const response = await axios.get('http://localhost:8000/gendered-users', {
	// 			params: { gender: user?.gender_interest },
	// 		});
	// 		setGenderedUsers(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);

	// useEffect(() => {
	// 	if (user) {
	// 		getGenderedUsers();
	// 	}
	// }, [user]);

	// const updateMatches = async (matchedUserId) => {
	// 	try {
	// 		await axios.put('http://localhost:8000/addmatch', {
	// 			userId,
	// 			matchedUserId,
	// 		});
	// 		getUser();
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// const swiped = (direction, swipedUserId) => {
	// 	if (direction === 'right') {
	// 		updateMatches(swipedUserId);
	// 	}
	// 	setLastDirection(direction);
	// };

	// const outOfFrame = (name) => {
	// 	console.log(name + ' left the screen!');
	// };

	// const matchedUserIds = user?.matches
	// 	.map(({ user_id }) => user_id)
	// 	.concat(userId);

	// const filteredGenderedUsers = genderedUsers?.filter(
	// 	(genderedUser) => !matchedUserIds.includes(genderedUser.user_id)
	// );

	// console.log('filteredGenderedUsers ', filteredGenderedUsers);

	return (
		<>
			<div className="dashboard">
				<ChatContainer
				// user={user}
				/>
				<div className="swipe-container">
					<div className="card-container">
						{characters.map((character) => (
							<TinderCard
								className="swipe"
								key={character.name}
								onSwipe={(dir) => swiped(dir, character.name)}
								onCardLeftScreen={() => outOfFrame(character.name)}
							>
								<div
									style={{ backgroundImage: 'url(' + character.url + ')' }}
									className="card"
								>
									<h3>{character.name}</h3>
								</div>
							</TinderCard>
						))}
						<div className="swipe-info">
							{lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
						</div>
					</div>
				</div>
			</div>
			{/* {user &&
            <div className="dashboard">
                <ChatContainer user={user}/>
                <div className="swipe-container">
                    <div className="card-container">

                        {filteredGenderedUsers?.map((genderedUser) =>
                            <TinderCard
                                className="swipe"
                                key={genderedUser.user_id}
                                onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                <div
                                    style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                    className="card">
                                    <h3>{genderedUser.first_name}</h3>
                                </div>
                            </TinderCard>
                        )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                    </div>
                </div>
            </div>} */}
		</>
	);
};
export default Dashboard;
