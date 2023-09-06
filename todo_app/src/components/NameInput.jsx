import React from 'react'

const NameInput = () => {
  return (
    <div className='layout'>
        <div>
            <div>
                <div className='box'>
                    <h1>Whats your name?</h1>
                </div>
                <div className='shadowbox' style={{height: 150+10,}}></div>
                <button>submit</button>
            </div>
            <input type="text" placeholder='input here...'/>
        </div>

        
    </div>
  )
}

export default NameInput