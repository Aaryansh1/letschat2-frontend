import { useState } from 'react';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="App">
    <header>
      <Image
        style={{
          borderRadius: "9999%",
          marginTop: "2px",
        }}
        width= {65}
        height= {65}
        src="/letschatLOGO.jpg"
        alt=""
      />
      <div className="heading">
        <h3>Let&apos;s Chat</h3>
        <p>A place where everyone can open up</p>
      </div>
    </header>
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
