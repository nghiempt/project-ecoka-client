"use client";

import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  CardMedia,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut, useSession } from "next-auth/react";
import { URL } from "@/constant/url";
import LanguageChanger from "../translation/language-changer";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, Drawer } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InfoIcon from '@mui/icons-material/Info';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LanguageChangerMobile from "../translation/language-changer-mobile";
import PersonIcon from '@mui/icons-material/Person';

export default function Header({ translate }: { translate: any }) {
  const { data } = useSession();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(!open);
  };

  useEffect(() => { }, [open])

  return (
    <div className="lg:w-3/4 flex justify-between items-center py-10">
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className="pt-6 flex flex-col justify-between items-center">
          {
            data?.user ? (<div className="mb-4 flex flex-col justify-center items-center">
              <h1>Hi, nghiempt.dev@gmail.com</h1>
              <Link href={{
                pathname: '/sign-in'
              }}
                className="mt-4"
              >
                <button
                  className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center"
                >
                  {'Đăng xuất'}<LogoutIcon className="ml-2" fontSize="small" />
                </button>
              </Link>
            </div>) : (<Link href={{
              pathname: '/sign-in'
            }}
              className="mt-4"
            >
              <button
                className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center"
              >
                <LoginIcon className="mr-2" fontSize="small" /> {
                  translate('header-sign-in')
                }
              </button>
            </Link>)
          }
          <List className="w-full">
            {[translate('header-tab-home'), translate('header-tab-collection'), translate('header-tab-about'), translate('header-tab-blog'), 'CONTACT'].map((text, index) => (
              <Link key={index} href={{
                pathname: `${index === 0 ? '/' : index === 1 ? '/collection' : index === 2 ? '/about' : index === 3 ? '/blog': '/contact'}`
              }}>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? <HomeIcon /> : index === 1 ? <ProductionQuantityLimitsIcon /> : index === 2 ? <InfoIcon /> : <PostAddIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Link href={{
        pathname: '/'
      }}>
        <CardMedia
          sx={{ width: 140, height: 50, borderRadius: "10px" }}
          image={URL.ECOKA_LOGO_SQUARE}
          className="cursor-pointer"
          title="card"
        />
      </Link>
      <div className={`mx-10 flex gap-x-10`}>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]"
        >
          <Link href={{
            pathname: '/'
          }}>
            {
              translate('header-tab-home')
            }
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]"
        >
          <Link href={{
            pathname: '/about'
          }}>
            {
              translate('header-tab-about')
            }
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]"
        >
          <Link href={{
            pathname: '/collection'
          }}>
            {
              translate('header-tab-collection')
            }
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]"
        >
          <Link href={{
            pathname: '/blog'
          }}>
            {
              translate('header-tab-blog')
            }
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]"
        >
          <Link href={{
            pathname: '/contact'
          }}>
            CONTACT
          </Link>
        </Button>
      </div>
      {/* <div className="lg:w-[100px]"></div> */}
      <div className="flex justity-center items-center">
        <Avatar
          alt="avatar"
          src={translate('lang') === 'vi' ? URL.VN_FLAG : translate('lang') === 'en' ? URL.EN_FLAG : URL.JA_FLAG}
          sx={{ width: 20, height: 20, marginRight: 1 }}
        />{" "}
        <div className="hidden lg:block"><LanguageChanger /></div>
        <div className="lg:hidden"><LanguageChangerMobile /></div>
      </div>
      <div className="ml-6 lg:hidden cursor-pointer" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>
      {data?.user ? (
        <div className="flex justify-center items-center">
          <h1 className="text-[16px] mr-5">Hi, {data?.user?.name}</h1>{" "}
          <div onClick={() => signOut()} className="mr-5 cursor-pointer">
            <LogoutIcon />
          </div>
        </div>
      ) : (
        <Link href={{
          pathname: '/sign-in'
        }}
          className="hidden lg:block bg-[rgb(var(--quaternary-rgb))] p-2 rounded-full"
        >
          {/* <button
            className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-2 rounded-lg font-semibold flex justify-center items-center"
          >
            <LoginIcon className="mr-2" fontSize="small" /> {
              translate('header-sign-in')
            }
          </button> */}
          <PersonIcon />
        </Link>
      )}
    </div>
  );
}
