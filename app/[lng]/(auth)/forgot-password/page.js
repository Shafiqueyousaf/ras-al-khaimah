"use client";

import Image from "next/image";
import FormInput from "@/app/components/FormInput";
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useTranslation } from '@/app/i18n/client'

export default function ForgotPassword({ params: { lng } }) {

  const { t } = useTranslation(lng)

  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const forgotEmailHandler = (e)=>{
    setForgotEmail(e.target.value)
  }

  const recoverAccount = (e)=>{
    e.preventDefault();
    
    let errors = {};
    if(!forgotEmail){
        errors.forgotEmail = t("forgot-password.email-error-message");
    }
    else if(!/\S+@\S+\.\S+/.test(forgotEmail)){
        errors.forgotEmail = t("forgot-password.email-is-invalid")
    }
    setErrors(errors);

    if(Object.keys(errors).length === 0){
        router.push(`/${lng}/sign-in`)
    }
  }

    return (
        <div className="registration_wrapper flex items-center justify-center min-h-[100vh]">
            <div className="registration_inner w-full py-24">
              <div className="registration_container mx-auto px-4 max-w-90">
                  <div className="grid grid-cols-5">
                    <div className="img_wrapper col-start-1 col-end-4 relative">
                      <Image src="/login-img.jpg" alt="register image" className="h-auto w-full" height={500} width={500} />
                    </div>
                    <div className="registration_card bg-white rounded-4xl shadow-top py-16 col-start-4 col-end-6 self-center [.english_&]:-translate-x-1/4 [.arabic_&]:translate-x-1/4 w-[calc(100%+33%)]">
                      <div className={`registration_card_inner mx-auto flex flex-col justify-center`}>
                        <header className="mb-5">
                          <h1 className="text-theme-blue text-40 font-semibold">{t("forgot-password.heading")}</h1>
                          <p className="text-base">{t("forgot-password.sub-heading")}</p>
                        </header>
                        <form>
                          <div className="from_group mb-5">
                            <label className="formLabel mb-2.5 block">{t("forgot-password.email")}</label>
                            <FormInput type="email" placeholder={t("forgot-password.enter-email")} className={errors.forgotEmail ? "border-red-500" : ""} onChange={forgotEmailHandler}/>
                            {errors.forgotEmail && <p className="mt-1 text-red-500">{errors.forgotEmail}</p>}
                          </div>
                          <div className="from_group mb-5 flex items-center justify-between mt-17">
                              <Link href={`/${lng}/sign-in`} className="text-[#C40000] text-base"><ChevronLeftIcon className="size-6 inline-block align-bottom [.arabic_&]:-scale-x-100"/><span>{t("forgot-password.back-to-sign-in")}</span></Link>
                              <button type="submit" className="bg-primary-300 text-white rounded p-4 min-w-[142px]" onClick={recoverAccount}>{t("forgot-password.recover-account")}</button>
                          </div>
                        </form>  
                      </div>                        
                    </div>
                  </div>
              </div>
            </div>
        </div>
    );
}
  