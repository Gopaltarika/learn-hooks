import React, { useEffect, useReducer, useRef, useState } from 'react'

const Hooks = () => {
    const [count, setcount] = useState(0)
    const [view, setview] = useState(false)
    const [color, setcolor] = useState('')
    const [check, setcheck] = useState('')
    const [text, settext] = useState('')
    const [time, settime] = useState(0)
    const [inputvalue, setinputvalue] = useState("")
    const showing = useRef(0);
    const inputElement = useRef();

    useEffect(() => {
        setTimeout(() => {
            settime((time) => time + 1)
        }, 1000);
    },);
    useEffect(() => {
        showing.current = showing.current + 1;
    }, [inputvalue])
    const focusInput = () => {
        inputElement.current.focus();
    };
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "subtract":
                return state - 1;
            case "reset":
                return 0;
            default:
                throw new Error("Unexpected action");
        }
    };
    const [reduce, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        {/* usestate */}
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-[45px] font-mono font-bold pt-8'>UseState</h1>
                <hr className='max-w-[1000px] border-2 w-full' />
                <h2 className='text-[25px] font-mono font-bold'>Counter</h2>
                <p className='text-[20px]'>{count}</p>
                <div className='flex gap-5'>
                    <button className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => setcount(count + 1)}>add</button>
                    <button className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => setcount(count - 1)}>sub</button>
                    <button className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => setcount(0)}>reset</button>
                </div>
                <div className='py-8 flex flex-col items-center w-full'>
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold pb-5'>Toggle Button</h2>
                    <h2 className='text-[25px] font-mono font-bold'>{view ? "hidden" : "show"}</h2>
                    <button className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => setview(!view)}>click</button>
                </div>
                <div className="pb-8 items-center flex-col flex w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>Select color code</h2>
                    <input type="color" onChange={(e) => setcolor(e.target.value)} />
                    <p className='text-[25px] pt-3 font-mono font-bold' style={{ color: color }}>{color}</p>
                </div>
                <div className="flex items-center flex-col w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>Checkbox</h2>
                    <div className='flex items-center gap-5'>
                        <input type="checkbox" name="check" id="check" onClick={() => setcheck(!check)} />
                        <label For='check' className=' cursor-pointer text-[20px] font-mono font-bold'>I agree to this condition</label>
                    </div>
                    <p className='font-mono text-[20px] font-semibold'>{check ? "Checked" : ""}</p>
                </div>
                <div className="flex gap-4 items-center flex-col py-8 w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>OnChange Text</h2>
                    <input className='border-2 p-2 rounded-lg border-[#02cdcf]' type="text" onChange={(k) => settext(k.target.value)} />
                    <p className='text-[20px] font-mono font-semibold'>Hello {text},</p>
                </div>
            </div>
            {/* useeffect */}
            <div className='flex justify-center items-center flex-col w-full'>
                <hr className=' border-2 w-full' />
                <h1 className='text-[45px] font-mono font-bold pt-8'>UseEffect</h1>
                <div className="flex flex-col items-center py-5 w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>Timer</h2>
                    <p className='text-[20px] font-mono font-semibold'>{time}</p>
                </div>
            </div>
            {/* useref */}
            <div className='flex justify-center items-center flex-col w-full'>
                <hr className=' border-2 w-full' />
                <h1 className='text-[45px] font-mono font-bold pt-8'>UseRef</h1>
                <div className="flex flex-col items-center py-5 w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>input value couting</h2>
                    <input className='border-2 border-[#02cdcf]' value={inputvalue} type="text" onChange={(p) => setinputvalue(p.target.value)} />
                    <p className='text-[20px] font-mono font-semibold'>{showing.current}</p>
                </div>
                <div className="flex flex-col items-center py-5 w-full">
                    <hr className='max-w-[1000px] border-2 w-full' />
                    <h2 className='text-[25px] font-mono font-bold'>Focus Input</h2>
                    <div className=' flex items-center gap-3'>
                        <input className='border-2 border-[#02cdcf]' type="text" ref={inputElement} />
                        <button className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={focusInput}>click</button>
                    </div>
                </div>
            </div>
            {/* usereducer */}
            <div className='flex justify-center items-center flex-col w-full'>
                <hr className=' border-2 w-full' />
                <h1 className='text-[45px] font-mono font-bold pt-8'>UseReducer</h1>
                <div className='flex items-center flex-col'>
                    <h2 className='font-mono font-semibold text-[20px]'>{reduce}</h2>
                    <div className='flex gap-3'>
                        <button  className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => dispatch("add")}>
                            add
                        </button>
                        <button  className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => dispatch("subtract")}>
                            subtract
                        </button>
                        <button  className='px-5 py-2 bg-[#02cdcf] text-white rounded-[20px]' onClick={() => dispatch("reset")}>
                            reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hooks