import { useState, useCallback } from "react";

const clsx = (...classNames) => {
    return classNames.filter(Boolean).join(' ');
}

const DividierLine = ({width = 'w-full'}) => (
    <div
        className={clsx(
            "self-stretch bg-gray-600 rounded-full self-center",
            width
        )}
    />
)

const useLoginForm = () => {
    const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const [outputMessage, setOutputMessage ] = useState('Enter your credentials below.');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name === 'usernameInput') {
            setUsername(value);
        } else if (name === 'passwordInput') {
            setPassword(value);
        }

        setOutputMessage('Ready to submit');
    };

    const handleSubmit = useCallback(async () => {
        if (username.length > 0 && password.length > 0) {
            console.log(`Submitting username: ${username} and password: ${password}`);
            setOutputMessage(`Attempting to login to ${username}...`);
            setIsLoading(true);
            
            // ----------------------------------------------------------------
            // SIMULATION OF API CALL TO DATABASE/PLC GATEWAY
            // ----------------------------------------------------------------
            // In a real application, you would replace this with:
            // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({username, password}) });
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // MOCK VALIDATION (admin/1234 is valid)
            if (username === 'admin' && password === '1234') {
                setOutputMessage('Login successful! Redirecting to dashboard...');
                
            } else {
                setOutputMessage('Invalid credentials. Try again. (Hint: admin/1234)');
            }

            setIsLoading(false);            
        } else {
            setOutputMessage('Please fill in both fields');
        }
    }, [username, password]);

    const handleClear = useCallback(() => {
        setUsername('');
        setPassword('');
        setOutputMessage('Form cleared. Enter new credentials.');
    }, []);

    return {
        username,
        password,
        outputMessage,
        isLoading,
        handleChange,
        handleSubmit,
        handleClear
    }
}

function MyComp_SimpleLogin() {
    const {
        username,
        password,
        outputMessage,
        isLoading,
        handleChange,
        handleSubmit,
        handleClear
    } = useLoginForm();

    return (
        <div
            className={clsx(
                "flex flex-col items-center justify-center max-w-sm w-full mx-auto p-2",
                "rounded-xl bg-gray-800 border border-gray-700"
            )}>
            <h1 className="font-bold text-3xl mb-4">
                User Login
            </h1>
            <span className="text-gray-400 text-sm mb-4">{`${isLoading ? "Verifying... " : ""}${outputMessage}`}</span>
            <div className={clsx(
                "flex w-full mx-4 items-center mb-2"
            )}>
                <span className="mr-1 w-1/5 min-w-20">Login ID</span>
                <DividierLine width="w-[2px]"/>
                <input 
                type="text" 
                value={username}
                placeholder="username"
                name="usernameInput"
                onChange={handleChange}
                className={clsx(
                    "flex-1 h-10 mx-2 p-2 bg-gray-700",
                    "border border-gray-600 rounded-md",
                    "transition"
                )}/>
            </div>
            <div className={clsx(
                "flex w-full mx-4"
            )}>
                <span className="text-left mr-1 w-1/5 min-w-20">Password</span>
                <DividierLine width="w-[2px]"/>
                <input 
                    type="password" 
                    placeholder="password"
                    name="passwordInput"
                    onChange={handleChange}
                    value={password}
                    className={clsx(
                        "flex-1 h-10 mx-2 p-2 bg-gray-700",
                        "border border-gray-600 rounded-md",
                        "transition"
                )}/>
            </div>
            <div className={clsx(
                "flex w-full m-4 justify-center"
            )}>
                <button
                onClick={handleSubmit} 
                className={clsx(
                    "m-2 w-1/2 bg-blue-700 border border-blue-900 rounded-lg p-2",
                    "hover:bg-blue-600 cursor-pointer",
                    "font-semibold text-md",
                    "transition duration-150 shadow-lg"
                )}>Submit</button>
                <button 
                onClick={handleClear}
                className={clsx(
                    "m-2 w-1/2 bg-blue-700 border border-blue-800 rounded-lg p-2",
                    "hover:bg-blue-600 cursor-pointer"
                )}>Clear</button>
            </div>
        </div>
    )
}

export default MyComp_SimpleLogin