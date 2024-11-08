import { useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { Sora } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from "framer-motion";

const sora = Sora({ subsets: ["latin"] });

const Login = () => {
    const [signIn, toggle] = useState(true);

    return (
        <div className={twMerge(sora.className, "flex flex-col items-center")}>
            <h2>{signIn ? "Sign In" : "Sign Up"}</h2>
            {/* Outros elementos do login ou registro */}
            <button onClick={() => toggle(!signIn)}>
                {signIn ? "Switch to Sign Up" : "Switch to Sign In"}
            </button>
        </div>
    );
};

export default Login;
