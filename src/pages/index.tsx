import { useState } from 'react';
import Header from '@/Components/Header';

export default function Home() {
  return (
    <div className="App">
    <Header />
    <section>
      {/* {user ? (
        <div className="main_context">
          <div className="sideBar_ChatRoom">
            <div className="sideBar">
              <SideBar
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
              />
            </div>
            <div className="chatRoom">
              <ChatRoom group={selectedGroup} setisBanned={setisBanned} />
            </div>
          </div>
        </div>
      ) : (
        <SignIn auth={auth} isBanned={isBanned} />
      )} */}
    </section>
  </div>
  )
}
