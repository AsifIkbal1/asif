import { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from 'react-router-dom';
import react from "../assets/images/brand-logos/2.png";
import firebase from "../assets/images/brand-logos/1.png";
import axios from 'axios';
import { LocalStorageBackup } from '../components/common/switcher/switcherdata/switcherdata';

const Login = ({ ThemeChanger }) => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [userInfo, setUserInfo] = useState({
        usr_email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
        setError("");
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://crimsoncup.dma-bd.com/cms/auth/login/', userInfo);
            console.log('Login successful:', response.data);

            // Navigate to the analytics dashboard
            navigate(`${import.meta.env.BASE_URL}dashboards/analytics/`);
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    // Apply theme on component mount
    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
    }, [ThemeChanger]);

    return (
        <Fragment>
            <div className="container">
                <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
                    <div className="grid grid-cols-12">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            <div className="box !p-[3rem]">
                                <nav className="!block firebase-data mt-6 bg-light mx-auto p-2 rounded-md" aria-label="Tabs">
                                    <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                                        <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary dark:text-white/70 dark:hover:text-white active" id="pills-with-brand-color-item-1" data-hs-tab="#pills-with-brand-color-01" aria-controls="pills-with-brand-color-01">
                                            <img src={react} alt="React" className="w-6 h-6 rounded-full" />
                                        </button>
                                        <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary dark:text-white/70 dark:hover:text-white" id="pills-with-brand-color-item-2" data-hs-tab="#pills-with-brand-color-02" aria-controls="pills-with-brand-color-02">
                                            <img src={firebase} alt="Firebase" className="w-6 h-6 rounded-full" />
                                        </button>
                                    </div>
                                </nav>
                                <div className="box-body" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                                    <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back!</p>
                                    {error && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">{error}</div>}
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="grid grid-cols-12 gap-y-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="signin-username" className="form-label text-default">Email</label>
                                                <input
                                                    type="email"
                                                    name="usr_email"
                                                    value={userInfo.usr_email}
                                                    onChange={handleInputChange}
                                                    className="form-control form-control-lg w-full !rounded-md"
                                                    id="signin-username"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 mb-2">
                                                <label htmlFor="signin-password" className="form-label text-default">Password</label>
                                                <div className="input-group">
                                                    <input
                                                        type={passwordShow ? 'text' : 'password'}
                                                        name="password"
                                                        value={userInfo.password}
                                                        onChange={handleInputChange}
                                                        className="form-control form-control-lg !rounded-s-md"
                                                        placeholder="Enter your password"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="ti-btn ti-btn-light !rounded-s-none"
                                                        onClick={() => setPasswordShow(!passwordShow)}
                                                    >
                                                        <i className={passwordShow ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 grid mt-2">
                                                <button
                                                    type="submit"
                                                    className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium"
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Signing In...' : 'Sign In'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="text-center mt-4">
                                        <p className="text-sm text-[#8c9097] dark:text-white/50">Don't have an account? <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="text-primary">Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapDispatchToProps = { ThemeChanger };
export default connect(null, mapDispatchToProps)(Login);
