"use client";

import React, { useEffect, useState } from "react";
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
import PersonIcon from '@mui/icons-material/Person';
import { ROUTE } from "@/constant/route";

export default function Header({ translate }: { translate: any }) {
  const { data } = useSession();

  const [open, setOpen] = React.useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isSubProductHovered, setIsSubProductHovered] = useState(false);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  useEffect(() => { }, [open])

  return (
    <div className="w-3/4 flex justify-between items-center py-10">
      <Drawer open={open} onClose={toggleDrawer()} anchor={"right"}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()} className="pt-6 flex flex-col justify-between items-center">
          {
            data?.user ? (<div className="mb-4 flex flex-col justify-center items-center">
              <h1>Hi, nghiempt.dev@gmail.com</h1>
              <Link
                href={{
                  pathname: '/sign-in'
                }}
                className="mt-4"
              >
                <button className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center">
                  {'Đăng xuất'}<LogoutIcon className="ml-2" fontSize="small" />
                </button>
              </Link>
            </div>) : (
              <Link
                href={{
                  pathname: '/sign-in'
                }}
                className="mt-4"
              >
                <button
                  className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-center items-center">
                  <LoginIcon className="mr-2" fontSize="small" />
                  {translate('header-sign-in')}
                </button>
              </Link>)
          }
          <List className="w-full">
            {[translate('header-tab-home'), translate('header-tab-collection'), translate('header-tab-about'), translate('header-tab-blog'), 'CONTACT'].map((text, index) => (
              <Link
                key={index}
                href={{
                  pathname: `${index === 0 ? ROUTE.HOME : index === 1 ? ROUTE.COLLECTION : index === 2 ? ROUTE.ABOUT : index === 3 ? ROUTE.BLOG : ROUTE.CONTACT}`
                }}
              >
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
      <Link
        href={{
          pathname: ROUTE.HOME
        }}
      >
        <CardMedia
          sx={{ width: 140, height: 50, borderRadius: "10px" }}
          image={URL.ECOKA_LOGO_SQUARE}
          className="cursor-pointer"
          title="card"
        />
      </Link>



      <div className={`flex gap-x-10 items-center`}>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]">
          <Link
            href={{
              pathname: ROUTE.HOME
            }}
          >
            {translate('header-tab-home')}
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]">
          <Link
            href={{
              pathname: ROUTE.ABOUT
            }}
          >
            {translate('header-tab-about')}
          </Link>
        </Button>
        <div className="group relative cursor-pointer">
          <Button
            className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]">
            <Link
              href={{
                pathname: ROUTE.COLLECTION
              }}
            >
              {translate('header-tab-collection')}
            </Link>
          </Button>
          <div className="invisible absolute z-50 flex w-[400px] flex-row gap-x-6 mt-1 p-6 shadow-xl bg-gray-500 opacity-90 rounded-md shadow-xl group-hover:visible">
            <div className="w-full flex flex-col">
              <Link replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '1' }, }}>
                <h2 className="text-white text-[16px] font-semibold">HOME DECORATION</h2>
              </Link>
              <Link className="!cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '1' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Macrame Decoration</h2>
              </Link>
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '2' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Hyacinth Decoration</h2>
              </Link>
              <Link className='mt-4 cursor-pointer' replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '3' }, }}>
                <h2 className="text-white cursor-pointer text-[16px] font-semibold">KITCHEN</h2>
              </Link>
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '3' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Macrame for Kitchen</h2>
              </Link>
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '4' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Hyacinth for Kitchen</h2>
              </Link>
            </div>
            <div className="w-full flex flex-col">
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '5' }, }}>
                <h2 className="text-white cursor-pointer text-[16px] font-semibold">FASHION</h2>
              </Link>
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '6' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Macrame Fashion</h2>
              </Link>
              <Link className="cursor-pointer" replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '6' }, }}>
                <h2 className="text-white cursor-pointer text-[14px]">Hyacinth Fashion</h2>
              </Link>
              <Link className='mt-4 cursor-pointer' replace
                scroll={false}
                prefetch={false} href={{ pathname: ROUTE.COLLECTION, query: { category: '7' }, }}>
                <h2 className="text-white cursor-pointer text-[16px] font-semibold">FURNITURE</h2>
              </Link>
            </div>
          </div>
        </div>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]">
          <Link
            href={{
              pathname: ROUTE.BLOG
            }}
          >
            {translate('header-tab-blog')}
          </Link>
        </Button>
        <Button
          className="!text-[15px] !font-semibold !text-gray-700 !hidden lg:!block hover:!bg-[rgb(var(--quaternary-rgb))]">
          <Link
            href={{
              pathname: ROUTE.CONTACT
            }}
          >
            {translate('header-tab-contact')}
          </Link>
        </Button>
      </div>
      <div className="flex justity-center items-center">
        <Avatar
          alt="avatar"
          src={translate('lang') === 'vi' ? URL.VI_FLAG : translate('lang') === 'en' ? URL.EN_FLAG : URL.JA_FLAG}
          sx={{ width: 20, height: 20, marginRight: 1 }}
        />{" "}
        <div className=""><LanguageChanger /></div>
      </div>
      <div className="ml-6 lg:hidden cursor-pointer" onClick={toggleDrawer()}>
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
        <Link
          href={{
            pathname: ROUTE.SIGN_IN
          }}
          className="hidden lg:block bg-[rgb(var(--quaternary-rgb))] p-2 rounded-full"
        >
          <PersonIcon />
        </Link>
      )}
    </div>
  );
}
