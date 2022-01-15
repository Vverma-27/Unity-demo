import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Head from 'next/head'

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  // const menuRef = useRef < HTML;
  useEffect(() => {
    const func = (e: SyntheticEvent): void => {
      if (
        !(
          [...e.target.classList].includes(
            "component-icon",
            "component-button__icon--is-standalone"
          ) ||
          [...e.target.parentNode.classList].includes(
            "component-icon",
            "component-button__icon--is-standalone"
          )
        )
      )
        setDropdownOpen(false);
    };
    document.body.addEventListener("click", func);
    return () => document.body.removeEventListener("click", func);
  }, []);
  return (
      <div className="app">
      <Head>
        <title>Unity Demo</title>
      </Head>
        <div
          className=" bg-black z-10 sticky top-0"
          style={{ minWidth: "fit-content" }}
        >
          <nav className="Header">
            <div className="Header--inner">
              <div>
                <div className="mr-3 hamburger-icon">
                  <div className="hamburger-menu-button">
                    <div
                      className={`menu-bars ${sideBarOpen && "close-menu"}`}
                      onClick={(e) => {
                        setSideBarOpen(!sideBarOpen);
                      }}
                    >
                      <span className="bar1"></span>
                      <span className="bar2"></span>
                      <span className="bar3"></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`side-menu ${
                    (!sideBarOpen && "closed") || "open"
                  }`}
                >
                  <div className="parent-item"> </div>
                  <div className="menu-items">
                    <div>
                      <span className="label">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                          Docs Home
                        </a>
                      </span>
                    </div>
                    <div>
                      <span className="label">
                        <a
                          href="https://unity.com/learn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learning
                        </a>
                      </span>
                    </div>
                    <div>
                      <span className="label">
                        <a target="_blank" rel="noopener noreferrer">
                          Community
                        </a>
                      </span>
                      <svg
                        width="5"
                        height="10"
                        viewBox="0 0 5 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m0 10 5-5-5-5v10z" fill="#fff"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="label">
                        <a target="_blank" rel="noopener noreferrer">
                          Support &amp; Services
                        </a>
                      </span>
                      <svg
                        width="5"
                        height="10"
                        viewBox="0 0 5 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m0 10 5-5-5-5v10z" fill="#fff"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                {sideBarOpen && <div className="menu-overlay"></div>}
              </div>
              <div className="Header--logo-wrapper relative flex-shrink-0">
                <a href="/">
                  <svg
                    className="sc-1eio69k-1 iepSey Logo"
                    role="img"
                    width="133"
                    height="48"
                    viewBox="0 0 133 48"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "auto", height: "32px" }}
                  >
                    <title>Unity logo</title>
                    <path
                      fill="#fff"
                      d="M53.7 26.1V12.5h5.7v13.8c0 2.3 1.2 3.8 4 3.8 2.6 0 3.9-1.6 3.9-3.9V12.5H73v13.6c0 5.3-3.2 8.5-9.6 8.5-6.5.1-9.7-3.1-9.7-8.5zM75.6 17.7h5.1V20h.1c1.2-1.8 2.8-2.7 5.1-2.7 3.6 0 5.7 2.6 5.7 6.3v10.7h-5.3v-9.7c0-1.7-.9-2.9-2.6-2.9-1.7 0-2.9 1.5-2.9 3.5v9.1h-5.3V17.7zM94.3 11.2h5.3v4.3h-5.3v-4.3zm0 6.5h5.3v16.5h-5.3V17.7zM103.7 29.9V22h-2.2v-4.3h2.2v-5.2h5.1v5.2h3V22h-3v6.8c0 1.3.7 1.6 1.8 1.6h1.2v3.8c-.5.1-1.5.3-2.9.3-3 0-5.2-1-5.2-4.6zM115.1 35.6h1.8c1.5 0 2.2-.6 2.2-1.7 0-.7-.3-1.7-1-3.4l-4.9-12.7h5.5l2.2 7c.5 1.6 1 3.8 1 3.8h.1s.5-2.2 1-3.8l2.2-7h5.3l-5.7 16.7c-1.3 3.9-2.9 5.2-6.2 5.2h-3.4l-.1-4.1z"
                    ></path>
                    <path
                      fill="#ccc"
                      d="M42.5 33.6V11.2L23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c0 .3-.4.5-.6.4l-7.6-4.4-7.4 4.3L21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.5 4.2z"
                    ></path>
                    <path
                      fill="#a6a6a6"
                      d="m21.2 48 19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.4 4.3V11.2L21.2 23.5V48z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2l21.2 12.3 21.2-12.3L23.1 0z"
                    ></path>
                    <path
                      fill="#ccc"
                      d="m16.9 36.9-7.6-4.4-7.4 4.3L21.3 48V23.5L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c.1.4-.2.7-.5.5z"
                    ></path>
                  </svg>{" "}
                  Documentation
                </a>
              </div>
              <div className="links-wrapper">
                <div className="flex-grow"></div>
                <div className="component-button-group menu h-full self-start">
                  <a
                    className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--is-active gtm--rightnav-link"
                    target="_self"
                    rel="false"
                    href="/"
                  >
                    Docs Home
                  </a>
                  <a
                    className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                    target="_self"
                    rel="false"
                    href="https://unity.com/learn"
                  >
                    Learning
                  </a>
                  <div className="component-dropdown-menu component-header__dropdown-menu component-dropdown-menu--is-triggered-on-hover">
                    <button
                      type="button"
                      className="component-button component-button--size-normal component-button--color-transparent component-dropdown-menu__toggle-button"
                      aria-label="Application Menu"
                    >
                      Community
                    </button>
                    <div className="component-dropdown-menu__dropdown component-dropdown-menu__dropdown--position-left component-dropdown-menu__dropdown--hide">
                      <ul className="component-menu">
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://blog.unity.com/"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://forum.unity.com/"
                          >
                            Forums
                          </a>
                        </li>
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://answers.unity.com/"
                          >
                            Answers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="component-dropdown-menu component-header__dropdown-menu component-dropdown-menu--is-triggered-on-hover">
                    <button
                      type="button"
                      className="component-button component-button--size-normal component-button--color-transparent component-dropdown-menu__toggle-button"
                      aria-label="Application Menu"
                    >
                      Support &amp; Services
                    </button>
                    <div className="component-dropdown-menu__dropdown component-dropdown-menu__dropdown--position-left component-dropdown-menu__dropdown--hide">
                      <ul className="component-menu">
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://support.unity.com/hc/en-us/requests/new"
                          >
                            Customer Service
                          </a>
                        </li>
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://support.unity.com/hc/en-us"
                          >
                            Knowledge Base
                          </a>
                        </li>
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://unity.com/success-plans"
                          >
                            Technical Support
                          </a>
                        </li>
                        <li className="component-menu-item">
                          <a
                            className="component-button component-button--size-normal component-button--color-transparent component-button--is-link gtm--rightnav-link"
                            target="_self"
                            rel="false"
                            href="https://unity.com/professional-services"
                          >
                            Consulting Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component-button-group justify-self-end component-header__button-group">
                <div className="component-dropdown-menu component-header__dropdown-menu">
                  <button
                    type="button"
                    className={`component-button component-button--size-normal component-button--color-transparent component-button--is-icon-only component-dropdown-menu__toggle-button ${
                      (dropdownOpen && "component-button--is-active") || ""
                    }`}
                    aria-label="Application Menu"
                  >
                    <span
                      className="component-icon component-button__icon--is-standalone"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                          fill="currentColor"
                        ></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`component-dropdown-menu__dropdown ${
                      (!dropdownOpen &&
                        "component-dropdown-menu__dropdown--hide") ||
                      ""
                    }`}
                  >
                    <ul className="component-menu">
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://assetstore.unity.com/"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="-1 0 17 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.398 3.61a.73.73 0 0 1 .567.234.784.784 0 0 1 .215.547V15.25c0 .365-.104.716-.313 1.055a2.146 2.146 0 0 1-.82.78 2.35 2.35 0 0 1-1.133.274H3.086a2.22 2.22 0 0 1-1.133-.293 2.427 2.427 0 0 1-.82-.761A1.985 1.985 0 0 1 .82 15.25V4.39c0-.208.072-.39.215-.546a.688.688 0 0 1 .528-.235h3.046c0-.494.13-.963.391-1.406.26-.443.612-.807 1.055-1.094C6.47.85 6.953.72 7.5.72a2.8 2.8 0 0 1 1.445.39c.443.26.795.612 1.055 1.055.26.443.39.925.39 1.445h3.008zM7.5 1.968a1.62 1.62 0 0 0-1.191.488c-.326.326-.489.71-.489 1.152h3.36c0-.442-.163-.826-.489-1.152A1.621 1.621 0 0 0 7.5 1.969zm5.156 3.203h-2.265v1.133a.63.63 0 0 1-.176.43.537.537 0 0 1-.41.195.577.577 0 0 1-.45-.196.629.629 0 0 1-.175-.43v-1.13H5.82v1.133a.63.63 0 0 1-.175.43.577.577 0 0 1-.45.195.537.537 0 0 1-.41-.196.629.629 0 0 1-.176-.43V5.173H2.344V15.25c0 .156.071.293.215.41a.806.806 0 0 0 .527.176h8.828a.806.806 0 0 0 .527-.176c.144-.117.215-.254.215-.41V5.172z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                opacity=".87"
                              ></path>
                            </svg>
                          </span>
                          Asset Store
                        </a>
                      </li>
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://connect.unity.com/"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              width="21"
                              height="16"
                              viewBox="0 0 21 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.078 11.047c.13.156.378.39.742.703l.547.43-3.789 2.851c-.599.443-1.224.664-1.875.664-.495 0-.957-.104-1.387-.312a2.865 2.865 0 0 1-1.074-.899 3.12 3.12 0 0 1-.625-1.875c0-.494.104-.957.313-1.386.208-.43.507-.788.898-1.075l2.54-1.953-2.54-1.953A3.206 3.206 0 0 1 .93 5.13a3.052 3.052 0 0 1-.313-1.35c0-.677.222-1.302.664-1.875.287-.39.645-.69 1.074-.898.43-.209.88-.313 1.348-.313.703 0 1.341.222 1.914.664L9.29 4.211l-.469.351c-.182.105-.442.365-.78.782l-3.44-2.696c-.339-.208-.638-.312-.899-.312-.443 0-.82.195-1.133.586-.182.208-.273.495-.273.86 0 .494.17.872.508 1.132l4.258 3.281-4.22 3.242c-.39.26-.585.652-.585 1.172 0 .313.078.58.234.801.156.222.352.384.586.488.182.105.39.157.625.157.313 0 .612-.104.899-.313l3.476-2.695zm11.094-.899c.39.313.69.684.898 1.114.209.43.313.879.313 1.347 0 .677-.222 1.302-.664 1.875-.287.391-.645.69-1.074.899a3.06 3.06 0 0 1-1.348.312 3.055 3.055 0 0 1-1.914-.664l-4.844-3.789-.86-.625a.775.775 0 0 1-.273-.234 1.766 1.766 0 0 1-.156-.235 2.956 2.956 0 0 1-.742-1.992c0-.312.058-.599.176-.86.117-.26.293-.611.527-1.054.078-.13.247-.3.508-.508l5.703-4.375c.573-.442 1.198-.664 1.875-.664.495 0 .957.104 1.387.313.43.208.787.508 1.074.898a3.12 3.12 0 0 1 .625 1.875c0 .495-.104.957-.313 1.387a2.85 2.85 0 0 1-.898 1.074l-2.54 1.953 2.54 1.953zm-.742 3.32c.208-.286.312-.572.312-.859 0-.52-.182-.911-.547-1.171l-4.258-3.282 4.22-3.203c.39-.286.585-.677.585-1.172 0-.52-.273-.95-.82-1.289a1.237 1.237 0 0 0-.625-.156c-.313 0-.6.104-.86.312l-5.742 4.375-.234.235c-.208.208-.313.508-.313.898s.13.716.391.977l.156.156 5.703 4.453c.339.209.638.313.899.313.495 0 .872-.196 1.133-.586z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                opacity=".87"
                              ></path>
                            </svg>
                          </span>
                          Connect
                        </a>
                      </li>
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://dashboard.unity3d.com/"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              width="15"
                              height="12"
                              viewBox="0 0 15 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.32.68h9.18v5H5.32v-5zm5 10.82v-5h4.18v5h-4.18zm-10 0V.68H4.5V11.5H.32zm5 0v-5H9.5v5H5.32z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                opacity=".87"
                              ></path>
                            </svg>
                          </span>
                          Dashboard
                        </a>
                      </li>
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://distribute.dashboard.unity.com"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M14.083 21v-4.553h2.08c.644 0 1.045-.59.724-1.062l-4.167-5.031c-.32-.472-1.12-.472-1.444 0l-4.163 5.032c-.32.471.08 1.06.721 1.06h2.083V21H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-4.917z"></path>
                                <rect
                                  x="4"
                                  y="4"
                                  width="16"
                                  height="2"
                                  rx="1"
                                ></rect>
                              </g>
                            </svg>
                          </span>
                          Distribute
                        </a>
                      </li>
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://forum.unity.com/"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              width="19"
                              height="13"
                              viewBox="0 0 19 13"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.82 7.32c1.094 0 2.312.248 3.653.742 1.34.495 2.076 1.224 2.207 2.188v2.07h-5v-2.07c-.026-.625-.183-1.172-.47-1.64a4.422 4.422 0 0 0-1.17-1.25 8.35 8.35 0 0 1 .78-.04zm-6.64 0c1.093 0 2.304.248 3.633.742C11.14 8.557 11.87 9.287 12 10.25v2.07H.32v-2.07c.13-.964.866-1.693 2.207-2.188 1.341-.494 2.559-.742 3.653-.742zm0-1.64c-.73-.026-1.328-.274-1.797-.742-.469-.47-.703-1.062-.703-1.778s.234-1.308.703-1.777C4.852.914 5.444.68 6.16.68s1.309.234 1.777.703c.47.469.704 1.061.704 1.777s-.235 1.309-.704 1.777c-.468.47-1.054.717-1.757.743zm6.64 0c-.703-.026-1.289-.274-1.758-.742-.468-.47-.703-1.062-.703-1.778s.235-1.308.704-1.777C11.53.914 12.123.68 12.84.68c.716 0 1.308.234 1.777.703.469.469.703 1.061.703 1.777s-.234 1.309-.703 1.777c-.469.47-1.068.717-1.797.743z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                opacity=".87"
                              ></path>
                            </svg>
                          </span>
                          Forum
                        </a>
                      </li>
                      <li className="component-menu-item">
                        <a
                          className="component-button component-button--size-normal component-button--color-transparent component-button--is-link component-button--has-icon-left gtm--rightnav-link"
                          target="_self"
                          rel="false"
                          href="https://learn.unity.com/"
                        >
                          <span
                            className="component-icon component-menu-item__icon component-button__icon"
                            style={{ fontSize: "17px" }}
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"
                                fill="currentColor"
                              ></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                          </span>
                          Learn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="content-container flex-auto lg:p-12 max-w-screen-md md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto lg:pt-10">
          <div className="grid grid-cols-12">
            <div className="p-8 col-span-12 md:col-span-9">
              <div className="hero pb-8">
                <h1 className="">Documentation</h1>
                <h2>Docs and guides to work with the Unity ecosystem.</h2>
              </div>
              <div className="sb-wrapper md:hidden xl:w-10/12 2xl:w-8/12 md:sticky">
                <div className="sb-holder font-thin items-center sm:-mt-3 md:ml-5 md:mt-6 mb-5 relative text-sm">
                  <div className="sb-icon absolute left-3 top-2.5 pointer-events-none text-gray-400">
                    <i className="fa fa-search"></i>
                  </div>
                  <input
                    className="bg-gray-100 font-thin h-10 overflow-ellipsis overflow-hidden pl-9 pr-2 rounded-md w-full focus:outline-none focus:placeholder-gray-500"
                    placeholder="Search in this page"
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div className="groups-container">
                <div className="card-group-wrapper">
                  <div className="group-name-description">
                    <div className="group-name">Unity Editor & Scripting</div>
                    <div className="group-description">
                      Learn how to use and get the most from the Unity Editor.
                    </div>
                  </div>
                  <div className="getting-started">
                    <div className="getting-started-icon">
                      {" "}
                      <svg
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8437 16.4503L11.9963 21.3402C11.9419 21.4842 11.8436 21.6084 11.7146 21.6962C11.5855 21.7839 11.432 21.831 11.2747 21.831C11.1174 21.831 10.9639 21.7839 10.8348 21.6962C10.7058 21.6084 10.6075 21.4842 10.5531 21.3402L8.70576 16.4503C8.66729 16.3484 8.60662 16.2559 8.52793 16.1792C8.44924 16.1025 8.35442 16.0433 8.25 16.0058L3.23585 14.2042C3.08824 14.1512 2.96086 14.0553 2.87088 13.9294C2.78091 13.8036 2.73267 13.6539 2.73267 13.5004C2.73267 13.347 2.78091 13.1973 2.87088 13.0715C2.96086 12.9456 3.08824 12.8497 3.23585 12.7967L8.25 10.9951C8.35442 10.9576 8.44924 10.8984 8.52793 10.8217C8.60662 10.7449 8.66729 10.6525 8.70576 10.5506L10.5531 5.66064C10.6075 5.51669 10.7058 5.39246 10.8348 5.30471C10.9639 5.21697 11.1174 5.16992 11.2747 5.16992C11.432 5.16992 11.5855 5.21697 11.7146 5.30471C11.8436 5.39246 11.9419 5.51669 11.9963 5.66064L13.8437 10.5506C13.8821 10.6525 13.9428 10.7449 14.0215 10.8217C14.1002 10.8984 14.195 10.9576 14.2994 10.9951L19.3136 12.7967C19.4612 12.8497 19.5886 12.9456 19.6785 13.0715C19.7685 13.1973 19.8167 13.347 19.8167 13.5004C19.8167 13.6539 19.7685 13.8036 19.6785 13.9294C19.5886 14.0553 19.4612 14.1512 19.3136 14.2042L14.2994 16.0058C14.195 16.0433 14.1002 16.1025 14.0215 16.1792C13.9428 16.2559 13.8821 16.3484 13.8437 16.4503V16.4503Z"
                          stroke="black"
                          strokeWidth="1.26"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.4268 1.5V6"
                          stroke="black"
                          strokeWidth="1.26"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.7339 3.75H15.1196"
                          stroke="black"
                          strokeWidth="1.26"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M22.0411 6.75V9.75"
                          stroke="black"
                          strokeWidth="1.26"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M23.5791 8.25H20.5029"
                          stroke="black"
                          strokeWidth="1.26"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="getting-started-content-area">
                      <div className="getting-started-header">
                        Getting Started
                      </div>
                      <div className="getting-started-description">
                        Learn the basics. Explore topics like understanding the
                        Unity Editor interface, adding menu items, using assets,
                        creating scenes, and publishing builds.
                      </div>
                    </div>
                    <div className="getting-started-button-wrapper">
                      <a
                        className="getting-started-button"
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.unity3d.com/Manual/UnityOverview.html"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                  <div className="cards-wrapper cols-2">
                    <div className="card">
                      <div className="card-header">
                        <div className="icon">
                          <svg
                            width="28"
                            height="24"
                            viewBox="0 0 28 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 5.3125C14 4.31794 14.3951 3.36411 15.0984 2.66085C15.8016 1.95759 16.7554 1.5625 17.75 1.5625H25.25C25.4986 1.5625 25.7371 1.66127 25.9129 1.83709C26.0887 2.0129 26.1875 2.25136 26.1875 2.5V17.5C26.1875 17.7486 26.0887 17.9871 25.9129 18.1629C25.7371 18.3387 25.4986 18.4375 25.25 18.4375H17.75C16.7554 18.4375 15.8016 18.8326 15.0984 19.5359C14.3951 20.2391 14 21.1929 14 22.1875"
                              stroke="#ED5351"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1.8125 17.5C1.8125 17.7486 1.91127 17.9871 2.08709 18.1629C2.2629 18.3387 2.50136 18.4375 2.75 18.4375H10.25C11.2446 18.4375 12.1984 18.8326 12.9017 19.5359C13.6049 20.2391 14 21.1929 14 22.1875V5.3125C14 4.31794 13.6049 3.36411 12.9017 2.66085C12.1984 1.95759 11.2446 1.5625 10.25 1.5625H2.75C2.50136 1.5625 2.2629 1.66127 2.08709 1.83709C1.91127 2.0129 1.8125 2.25136 1.8125 2.5V17.5Z"
                              stroke="#ED5351"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="title">Unity Editor Manual</div>
                      </div>
                      <div className="card-content">
                        Use the Unity Editor to create 2D and 3D games, apps,
                        and experiences.
                      </div>
                      <div className="card-button-wrapper">
                        <a
                          href="https://docs.unity3d.com/Manual/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="highlighted">
                            <span>Read More →</span>
                          </button>
                        </a>
                      </div>
                      <div className="exploreTopics">
                        <div className="exploreTopics-title">
                          explore topics
                        </div>
                        <div className="exploreTopics-sublink">
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/UnityOverview.html"
                            rel="noopener noreferrer"
                          >
                            Working in Unity
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/Unity2D.html"
                            rel="noopener noreferrer"
                          >
                            Unity 2D
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/Graphics.html"
                            rel="noopener noreferrer"
                          >
                            Graphics
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/PhysicsSection.html"
                            rel="noopener noreferrer"
                          >
                            Physics
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/UNet.html"
                            rel="noopener noreferrer"
                          >
                            Networking
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/ScriptingSection.html"
                            rel="noopener noreferrer"
                          >
                            Scripting
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/Audio.html"
                            rel="noopener noreferrer"
                          >
                            Audio
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/AnimationSection.html"
                            rel="noopener noreferrer"
                          >
                            Animation
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/UIToolkits.html"
                            rel="noopener noreferrer"
                          >
                            UI
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/Navigation.html"
                            rel="noopener noreferrer"
                          >
                            Navigation
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/VROverview.html"
                            rel="noopener noreferrer"
                          >
                            Virtual Reality
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/ContributingToUnity.html"
                            rel="noopener noreferrer"
                          >
                            Contributing to Unity
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <div className="icon">
                          <svg
                            width="30"
                            height="18"
                            viewBox="0 0 30 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3125 1.5L1.875 9L10.3125 16.5"
                              stroke="#B39DDB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M19.6875 1.5L28.125 9L19.6875 16.5"
                              stroke="#B39DDB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="title">Scripting Reference</div>
                      </div>
                      <div className="card-content">
                        Refer to our API documentation for Unity scripts.
                      </div>
                      <div className="card-button-wrapper">
                        <a
                          href="https://docs.unity3d.com/ScriptReference/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="highlighted">
                            <span>Read More →</span>
                          </button>
                        </a>
                      </div>
                      <div className="exploreTopics">
                        <div className="exploreTopics-title">
                          explore topics
                        </div>
                        <div className="exploreTopics-sublink">
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Transform.html"
                            rel="noopener noreferrer"
                          >
                            Transform
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Object.Instantiate.html"
                            rel="noopener noreferrer"
                          >
                            Object.Instantiate
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Physics.Raycast.html"
                            rel="noopener noreferrer"
                          >
                            Physics.Raycast
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Vector3.html"
                            rel="noopener noreferrer"
                          >
                            Vector3
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Quaternion.html"
                            rel="noopener noreferrer"
                          >
                            Quaternion
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Random.Range.html"
                            rel="noopener noreferrer"
                          >
                            Random.Range
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/Input.html"
                            rel="noopener noreferrer"
                          >
                            Input
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/WaitForSeconds.html"
                            rel="noopener noreferrer"
                          >
                            WaitForSeconds
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/MonoBehaviour.html"
                            rel="noopener noreferrer"
                          >
                            MonoBehavior
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/ScriptReference/CharacterController.Move.html"
                            rel="noopener noreferrer"
                          >
                            CharacterController
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <div className="icon">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.625 16.3577V24.3747C5.625 24.6233 5.72377 24.8618 5.89959 25.0376C6.0754 25.2134 6.31386 25.3122 6.5625 25.3122H23.4375C23.6861 25.3122 23.9246 25.2134 24.1004 25.0376C24.2762 24.8618 24.375 24.6233 24.375 24.3747V16.3578"
                              stroke="#EB417A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M6.33216 4.6875H23.6678C23.8716 4.6875 24.0698 4.75386 24.2324 4.87655C24.395 4.99923 24.5133 5.17156 24.5693 5.36745L26.25 11.25H3.75L5.43073 5.36745C5.4867 5.17156 5.60495 4.99923 5.7676 4.87655C5.93025 4.75386 6.12843 4.6875 6.33216 4.6875Z"
                              stroke="#EB417A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.25 11.25V13.125C11.25 14.1196 10.8549 15.0734 10.1517 15.7766C9.44839 16.4799 8.49456 16.875 7.5 16.875C6.50544 16.875 5.55161 16.4799 4.84835 15.7766C4.14509 15.0734 3.75 14.1196 3.75 13.125V11.25"
                              stroke="#EB417A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M18.75 11.25V13.125C18.75 14.1196 18.3549 15.0734 17.6516 15.7766C16.9484 16.4799 15.9946 16.875 15 16.875C14.0054 16.875 13.0516 16.4799 12.3483 15.7766C11.6451 15.0734 11.25 14.1196 11.25 13.125V11.25"
                              stroke="#EB417A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M26.25 11.25V13.125C26.25 14.1196 25.8549 15.0734 25.1516 15.7766C24.4484 16.4799 23.4946 16.875 22.5 16.875C21.5054 16.875 20.5516 16.4799 19.8484 15.7766C19.1451 15.0734 18.75 14.1196 18.75 13.125V11.25"
                              stroke="#EB417A"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="title">Asset Store</div>
                      </div>
                      <div className="card-content">
                        Explore the packages and plugins that enhance Unity’s
                        capabilities.
                      </div>
                      <div className="card-button-wrapper">
                        <a
                          href="https://docs.unity3d.com/Manual/AssetStore.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="highlighted">
                            <span>Read More →</span>
                          </button>
                        </a>
                      </div>
                      <div className="exploreTopics">
                        <div className="exploreTopics-title">
                          explore topics
                        </div>
                        <div className="exploreTopics-sublink">
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/AssetStorePackages.html"
                            rel="noopener noreferrer"
                          >
                            Using asset store packages
                          </a>
                          <a
                            target="_blank"
                            className="explore-topics"
                            href="https://docs.unity3d.com/Manual/AssetStorePublishing.html"
                            rel="noopener noreferrer"
                          >
                            Publishing to the asset store
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
