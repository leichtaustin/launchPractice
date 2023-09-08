import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Auth from './components/Auth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const user_email = cookies.Email;
  const [ tasks, setTasks ] = useState(null);
  
  const getData = async () => {
    
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${user_email}`);
      const json = await response.json();
      // console.log(json);
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (authToken) {
      getData();
    };
  }, [])

  //Sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date));
  
  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken &&
        <>
          <ListHeader listName={'Holiday tick list'} getData={getData}/>
          <p className='user-email'>Welcome back {user_email}</p>
          {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
        </>
      }
    </div>
  );
}

export default App;
