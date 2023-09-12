import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Linux: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.85395 3.66994C5.78853 3.6759 5.7424 3.70715 5.71556 3.76369C5.68881 3.82023 5.66352 3.8485 5.6397 3.8485C5.60992 3.85446 5.59503 3.83958 5.59503 3.80386C5.59503 3.73244 5.65157 3.6878 5.76466 3.66995L5.85395 3.66994ZM6.63068 3.79493C6.60686 3.80089 6.57264 3.78154 6.52802 3.7369C6.4834 3.69226 6.43132 3.67887 6.37179 3.69673C6.51464 3.63125 6.60986 3.63721 6.65747 3.71458C6.67534 3.7503 6.66642 3.77708 6.63068 3.79493ZM3.49699 7.60714C3.47317 7.60119 3.4553 7.61012 3.44339 7.63393C3.43148 7.65774 3.4181 7.69494 3.40326 7.74553C3.38841 7.79612 3.37206 7.8363 3.35419 7.86606C3.33633 7.89582 3.30655 7.93451 3.26486 7.98213C3.22317 8.04165 3.22006 8.07736 3.25553 8.08926C3.27935 8.09522 3.31655 8.07439 3.36713 8.02677C3.4177 7.97915 3.4549 7.92559 3.47873 7.86607C3.48495 7.84821 3.4909 7.82738 3.49659 7.80358C3.50281 7.77977 3.50877 7.76192 3.51446 7.75001C3.52068 7.73811 3.52513 7.72472 3.52779 7.70984C3.53046 7.69496 3.53179 7.68306 3.53179 7.67413V7.64735L3.52246 7.62503L3.49566 7.60717L3.49699 7.60714ZM11.1303 10.8123C11.1303 10.7051 10.9667 10.5801 10.6393 10.4373C10.6631 10.348 10.6854 10.2662 10.7062 10.1918C10.727 10.1174 10.7419 10.04 10.7509 9.95965C10.7598 9.87929 10.7687 9.81531 10.7777 9.7677C10.7867 9.72008 10.788 9.65312 10.7817 9.56682C10.7755 9.48052 10.7724 9.42249 10.7724 9.39272C10.7724 9.36296 10.762 9.29749 10.7412 9.19631C10.7204 9.09513 10.7085 9.03412 10.7054 9.01329C10.7028 8.99245 10.6879 8.91805 10.6608 8.79009C10.634 8.66212 10.6177 8.58326 10.6117 8.5535C10.5522 8.26781 10.4123 7.96128 10.1921 7.63393C9.97187 7.30657 9.7576 7.08337 9.54928 6.96433C9.69214 7.08337 9.86177 7.33038 10.0582 7.70535C10.576 8.66956 10.7367 9.49688 10.5403 10.1873C10.4748 10.4254 10.326 10.5504 10.0939 10.5623C9.90938 10.5861 9.7948 10.531 9.75016 10.3971C9.70554 10.2632 9.68172 10.0147 9.6787 9.65163C9.67603 9.28856 9.64181 8.97014 9.57603 8.69635C9.52243 8.46422 9.4644 8.25888 9.40194 8.08032C9.33945 7.90176 9.28142 7.76636 9.22784 7.6741C9.17424 7.58185 9.12812 7.50894 9.08946 7.45537C9.05079 7.4018 9.01212 7.35717 8.97346 7.32145C8.93479 7.28574 8.91248 7.26491 8.90652 7.25896C8.82323 6.88994 8.73098 6.58341 8.62975 6.33938C8.52857 6.09536 8.44078 5.9287 8.36638 5.83942C8.29198 5.75014 8.22204 5.65194 8.15658 5.5448C8.09107 5.43767 8.04643 5.31863 8.02266 5.18769C7.99884 5.0627 8.0167 4.90348 8.07626 4.71004C8.13581 4.51661 8.14919 4.3693 8.11639 4.26811C8.08368 4.16693 7.95125 4.09253 7.7191 4.04491C7.62982 4.02706 7.49739 3.97349 7.32181 3.88421C7.14622 3.79493 7.04058 3.74732 7.00487 3.74137C6.95723 3.73541 6.92447 3.65804 6.9066 3.50924C6.88874 3.36044 6.91256 3.20867 6.97807 3.05392C7.04358 2.89917 7.15072 2.81882 7.29947 2.81287C7.51969 2.79501 7.67147 2.88429 7.75479 3.0807C7.83808 3.27711 7.84999 3.44972 7.79052 3.59852C7.72501 3.71161 7.71906 3.79047 7.77266 3.83511C7.82626 3.87975 7.91553 3.88122 8.04048 3.83951C8.11791 3.8157 8.15662 3.70857 8.15662 3.51811V3.18777C8.12684 3.00921 8.08666 2.86042 8.03608 2.74138C7.98551 2.62234 7.92301 2.53157 7.8486 2.46908C7.7742 2.40658 7.70427 2.36194 7.6388 2.33516C7.57329 2.30838 7.49294 2.28606 7.39775 2.2682C6.76089 2.31582 6.49603 2.71459 6.60317 3.46454C6.60317 3.55381 6.60005 3.59845 6.59383 3.59845C6.54023 3.54489 6.45244 3.51364 6.33046 3.50471C6.20845 3.49578 6.11024 3.49725 6.03584 3.50911C5.96144 3.52101 5.91532 3.50613 5.89746 3.46447C5.90368 3.12521 5.85607 2.85737 5.75462 2.66096C5.65344 2.46454 5.51952 2.36336 5.35286 2.35741C5.19216 2.35145 5.06865 2.43329 4.98235 2.60293C4.89604 2.77256 4.84694 2.94963 4.83504 3.13414C4.82882 3.22342 4.83922 3.33353 4.86625 3.46447C4.893 3.59541 4.93167 3.70701 4.98225 3.79927C5.03282 3.89152 5.07895 3.93169 5.12063 3.91979C5.18019 3.90193 5.2278 3.86027 5.26347 3.7948C5.28729 3.74123 5.26645 3.71743 5.20094 3.72337C5.15925 3.72337 5.11312 3.68022 5.06255 3.59392C5.01197 3.50762 4.98371 3.40792 4.97775 3.29483C4.97153 3.16389 4.99833 3.05378 5.05815 2.9645C5.11771 2.87522 5.21889 2.83356 5.36171 2.83951C5.46289 2.83951 5.54324 2.90201 5.60276 3.027C5.66223 3.15199 5.6905 3.26805 5.68756 3.37519C5.6849 3.48232 5.68041 3.54779 5.6741 3.5716C5.54316 3.66088 5.4509 3.74718 5.39734 3.83051C5.34969 3.90193 5.26785 3.97187 5.15182 4.04032C5.03576 4.10876 4.97475 4.14596 4.96879 4.15192C4.89146 4.23524 4.84533 4.31559 4.83042 4.39297C4.81557 4.47035 4.83788 4.52392 4.89735 4.55367C4.98064 4.60129 5.05504 4.65932 5.12055 4.72777C5.18606 4.79621 5.23368 4.85276 5.26339 4.8974C5.29317 4.94204 5.34822 4.98073 5.42855 5.01346C5.50891 5.0462 5.61456 5.06554 5.7455 5.07149C6.02524 5.08339 6.32879 5.03875 6.65614 4.93757C6.66805 4.93162 6.7365 4.91079 6.86149 4.87508C6.98648 4.83936 7.08915 4.80811 7.1695 4.78133C7.24985 4.75455 7.33764 4.71586 7.43287 4.66527C7.52811 4.61467 7.5906 4.56259 7.62035 4.50903C7.67395 4.4257 7.73347 4.40189 7.79891 4.4376C7.82869 4.45546 7.84802 4.48075 7.85691 4.51349C7.8658 4.54623 7.85687 4.58194 7.83011 4.62063C7.80336 4.65931 7.75425 4.68758 7.6828 4.70544C7.56376 4.74116 7.39562 4.80514 7.17838 4.89739C6.96112 4.98964 6.82572 5.04768 6.77215 5.07148C6.51027 5.18457 6.30195 5.25302 6.1472 5.27682C5.9984 5.30658 5.7633 5.30063 5.4419 5.25897C5.38234 5.24707 5.35554 5.25302 5.3615 5.27682C5.36772 5.30063 5.41831 5.35717 5.51327 5.44646C5.66206 5.58335 5.86145 5.64882 6.11143 5.64287C6.21261 5.63691 6.31975 5.61608 6.43284 5.58038C6.54593 5.54466 6.65306 5.503 6.75424 5.45539C6.85543 5.40777 6.95512 5.35569 7.05332 5.29915C7.15154 5.24261 7.24082 5.19202 7.32116 5.14738C7.40152 5.10274 7.47443 5.06703 7.5399 5.04024C7.60541 5.01346 7.65749 5.00602 7.69614 5.01792C7.7348 5.02983 7.76009 5.06256 7.772 5.11614C7.772 5.12804 7.76889 5.14143 7.76267 5.15631C7.75645 5.17119 7.74454 5.18607 7.72694 5.20095C7.70907 5.21583 7.6912 5.22922 7.67334 5.24112C7.65547 5.25303 7.63018 5.26791 7.59747 5.28576C7.56476 5.30362 7.53796 5.31701 7.51707 5.32594C7.49627 5.33486 7.46649 5.34974 7.42774 5.37058C7.38907 5.3914 7.3608 5.40479 7.34294 5.41075C7.17629 5.49407 6.97541 5.62502 6.74031 5.80358C6.50521 5.98214 6.30731 6.1101 6.14661 6.18748C5.9859 6.26486 5.84008 6.26783 5.70914 6.19641C5.58414 6.13094 5.39665 5.91369 5.14667 5.54467C5.01573 5.36016 4.94133 5.29469 4.92347 5.34826C4.91725 5.36612 4.91414 5.39588 4.91414 5.43754C4.91414 5.58634 4.8695 5.75448 4.78022 5.94197C4.69094 6.12945 4.60315 6.29462 4.51685 6.43747C4.43053 6.58031 4.36804 6.75292 4.32937 6.95528C4.2907 7.15765 4.32492 7.34514 4.43203 7.51774C4.29513 7.55346 4.10913 7.82129 3.87403 8.32125C3.63893 8.82121 3.49757 9.24083 3.44997 9.58009C3.43805 9.68722 3.43357 9.89256 3.4365 10.1961C3.43917 10.4997 3.42281 10.6752 3.38743 10.7229C3.33979 10.8657 3.25348 10.8746 3.12851 10.7496C2.93805 10.5651 2.83092 10.2854 2.80711 9.91042C2.7952 9.74377 2.80711 9.57711 2.84285 9.41046C2.86667 9.29737 2.86356 9.24381 2.83351 9.24976L2.79778 9.2944C2.58351 9.68127 2.61329 10.1753 2.88711 10.7764C2.91689 10.8479 2.99129 10.9312 3.11031 11.0264C3.22935 11.1216 3.30077 11.1812 3.32458 11.205C3.44362 11.3419 3.75312 11.6112 4.25309 12.0129C4.75305 12.4147 5.02981 12.6424 5.08338 12.6959C5.17861 12.7852 5.23069 12.8983 5.23962 13.0352C5.24851 13.1721 5.20686 13.3 5.11469 13.4191C5.02243 13.5381 4.88702 13.6066 4.70846 13.6244C4.7561 13.7137 4.84241 13.8461 4.96737 14.0217C5.09236 14.1973 5.17569 14.358 5.21735 14.5038C5.25904 14.6496 5.27988 14.8595 5.27988 15.1332C5.55367 14.9904 5.57452 14.7166 5.34242 14.3119C5.3186 14.2643 5.28735 14.2166 5.24869 14.169C5.21002 14.1214 5.18175 14.0857 5.16389 14.0619C5.14602 14.0381 5.14006 14.0202 5.14602 14.0083C5.16389 13.9786 5.2026 13.9503 5.26215 13.9235C5.32171 13.8967 5.38123 13.9042 5.44071 13.9458C5.7145 14.2553 6.20851 14.3625 6.92274 14.2672C7.71435 14.178 8.24109 13.9191 8.50298 13.4905C8.63988 13.2643 8.74106 13.1751 8.80652 13.2227C8.87799 13.2584 8.90777 13.4131 8.89586 13.6869C8.88964 13.8357 8.82119 14.1095 8.69052 14.5083C8.63692 14.6452 8.61906 14.7568 8.63692 14.8431C8.65479 14.9294 8.72621 14.9755 8.85119 14.9815C8.86906 14.8684 8.91221 14.6392 8.98066 14.294C9.0491 13.9488 9.08928 13.681 9.10119 13.4905C9.1131 13.3655 9.09377 13.1468 9.04319 12.8343C8.99261 12.5218 8.9703 12.2332 8.97626 11.9683C8.98248 11.7035 9.05092 11.4936 9.18159 11.3389C9.27087 11.2318 9.42264 11.1782 9.63691 11.1782C9.64313 10.958 9.7458 10.8002 9.94492 10.705C10.1443 10.6098 10.3601 10.5785 10.5922 10.6113C10.8243 10.644 11.0029 10.711 11.1279 10.8121L11.1303 10.8123ZM5.52362 3.42889C5.54148 3.3277 5.53406 3.23843 5.50135 3.16105C5.46864 3.08367 5.43442 3.03903 5.39868 3.02713C5.34508 3.01523 5.31828 3.03606 5.31828 3.08963C5.3302 3.11939 5.34509 3.13724 5.36295 3.1432C5.42242 3.1432 5.44326 3.18784 5.42549 3.27712C5.40762 3.39616 5.43144 3.45568 5.49695 3.45568C5.51482 3.45568 5.52362 3.44674 5.52362 3.42889ZM9.2644 5.18768C9.25249 5.14007 9.23316 5.10584 9.2064 5.08502C9.17965 5.06418 9.14098 5.0493 9.0904 5.04038C9.03983 5.03145 8.99667 5.01508 8.96094 4.99127C8.93116 4.97341 8.90289 4.9496 8.87614 4.91984C8.84938 4.89008 8.82854 4.86627 8.8136 4.84842C8.79876 4.83056 8.7824 4.81122 8.76454 4.79039C8.74667 4.76955 8.73476 4.75765 8.7288 4.75468C8.72258 4.75175 8.71067 4.75621 8.69307 4.76807C8.60978 4.8633 8.63063 4.99276 8.7556 5.15643C8.88059 5.32011 8.99665 5.41386 9.10379 5.43766C9.15739 5.44362 9.20055 5.41981 9.23326 5.36624C9.26597 5.31267 9.27632 5.25316 9.2644 5.18768ZM7.67524 3.28604C7.67524 3.22056 7.66036 3.16253 7.63058 3.11195C7.6008 3.06136 7.56809 3.02416 7.53244 3.00035C7.49671 2.97654 7.46991 2.96761 7.45204 2.97356C7.36876 2.97952 7.34791 3.00035 7.38951 3.03605L7.42524 3.05391C7.50853 3.07771 7.5621 3.16997 7.58595 3.33067C7.58595 3.34853 7.60977 3.34258 7.65742 3.31282L7.67524 3.28604ZM8.15735 1.20584C8.15735 1.19394 8.14993 1.17906 8.13508 1.1612C8.12024 1.14334 8.09344 1.12251 8.05468 1.09871C8.01602 1.0749 7.98775 1.05704 7.96988 1.04513C7.8806 0.955855 7.80918 0.911215 7.7556 0.911215C7.702 0.917171 7.66778 0.939491 7.65294 0.978175C7.63809 1.01686 7.63498 1.05555 7.6436 1.09424C7.65258 1.13293 7.65125 1.17013 7.6396 1.20584C7.63338 1.22965 7.61552 1.2609 7.586 1.29959C7.55623 1.33827 7.53836 1.36505 7.5324 1.37993C7.52618 1.39481 7.53512 1.42011 7.5592 1.45583C7.58303 1.47369 7.60685 1.47369 7.63067 1.45583C7.65449 1.43797 7.68725 1.41119 7.72894 1.37548C7.77063 1.33977 7.81526 1.31298 7.86284 1.29514C7.86907 1.28918 7.89587 1.2862 7.94324 1.2862C7.99089 1.2862 8.03553 1.28025 8.07716 1.26835C8.11885 1.25645 8.14544 1.2356 8.15735 1.20584ZM13.2016 13.1782C13.3207 13.2496 13.4129 13.3225 13.4784 13.3969C13.5439 13.4713 13.5796 13.5427 13.5856 13.6112C13.5918 13.6796 13.5844 13.7466 13.5633 13.812C13.5425 13.8775 13.4964 13.943 13.4249 14.0084C13.3535 14.0739 13.2835 14.1319 13.2151 14.1825C13.1467 14.2331 13.0574 14.2882 12.9473 14.3477C12.8372 14.4072 12.7434 14.4563 12.6661 14.495C12.5887 14.5337 12.4935 14.5798 12.3804 14.6334C12.2673 14.687 12.1869 14.7257 12.1393 14.7495C11.9131 14.8626 11.6587 15.0292 11.376 15.2494C11.0933 15.4697 10.8686 15.6601 10.7019 15.8208C10.6007 15.916 10.3984 15.9741 10.0948 15.9949C9.79128 16.0157 9.52641 15.9726 9.30024 15.8655C9.19311 15.8119 9.10532 15.742 9.03687 15.6557C8.96843 15.5694 8.91932 15.4935 8.88956 15.428C8.85979 15.3625 8.79432 15.3045 8.69315 15.2539C8.59196 15.2033 8.45209 15.175 8.27354 15.1691C8.01165 15.1631 7.62478 15.1602 7.11291 15.1602C6.99982 15.1602 6.83019 15.1646 6.60402 15.1735C6.37784 15.1825 6.20524 15.1899 6.08621 15.1959C5.82431 15.2018 5.58772 15.2465 5.37643 15.3298C5.16513 15.4131 5.00592 15.5024 4.89879 15.5976C4.79165 15.6928 4.6622 15.7777 4.51042 15.8521C4.35865 15.9265 4.19944 15.9607 4.03278 15.9547C3.86017 15.9488 3.52984 15.8565 3.04178 15.678C2.55373 15.4994 2.11924 15.3714 1.73831 15.2941C1.62523 15.2703 1.47345 15.242 1.28299 15.2092C1.09253 15.1765 0.943731 15.1497 0.836593 15.1289C0.729455 15.1081 0.611904 15.0798 0.483939 15.0441C0.355975 15.0084 0.256282 14.9652 0.18486 14.9146C0.113393 14.864 0.0628019 14.806 0.0330864 14.7405C-0.0264691 14.6036 -0.00562465 14.4057 0.0956198 14.1468C0.196802 13.8879 0.250366 13.7257 0.256313 13.6603C0.262535 13.565 0.250624 13.446 0.22058 13.3031C0.190802 13.1603 0.161024 13.0338 0.131246 12.9237C0.101469 12.8136 0.0880908 12.705 0.091113 12.5978C0.0937797 12.4907 0.125024 12.4104 0.184846 12.3568C0.268135 12.2854 0.437766 12.2437 0.693739 12.2318C0.949668 12.2199 1.12822 12.1842 1.22941 12.1247C1.40797 12.0175 1.53296 11.9134 1.60438 11.8122C1.67576 11.711 1.71145 11.5592 1.71145 11.3569C1.83644 11.7914 1.74121 12.1068 1.42575 12.3032C1.23529 12.4223 0.988286 12.4669 0.68474 12.4371C0.482375 12.4193 0.354406 12.449 0.300833 12.5264C0.2235 12.6157 0.238389 12.7853 0.3455 13.0353C0.357411 13.071 0.381233 13.1246 0.416966 13.196C0.4527 13.2674 0.477988 13.321 0.492833 13.3567C0.507677 13.3924 0.521055 13.443 0.532966 13.5085C0.544877 13.574 0.547988 13.6394 0.5423 13.7049C0.5423 13.7942 0.491708 13.94 0.390526 14.1424C0.289344 14.3447 0.2477 14.4876 0.265593 14.5709C0.28346 14.6721 0.393571 14.7495 0.595926 14.803C0.714966 14.8388 0.966437 14.8938 1.35034 14.9682C1.73423 15.0426 2.03034 15.1036 2.23866 15.1512C2.3815 15.1869 2.60173 15.2524 2.89933 15.3476C3.19693 15.4429 3.44244 15.5113 3.63587 15.553C3.82931 15.5946 3.99448 15.6065 4.13138 15.5887C4.38731 15.553 4.57925 15.4696 4.70722 15.3387C4.83519 15.2078 4.90364 15.0649 4.91257 14.9102C4.92145 14.7554 4.89914 14.5813 4.84563 14.3879C4.79203 14.1945 4.73549 14.0397 4.67601 13.9236C4.61645 13.8076 4.55693 13.699 4.49745 13.5978C3.77726 12.4669 3.27432 11.7467 2.98863 11.4372C2.5839 10.9968 2.24762 10.8777 1.97978 11.0801C1.91427 11.1337 1.86963 11.089 1.84586 10.9462C1.82799 10.851 1.82204 10.7379 1.82799 10.6069C1.83422 10.4343 1.86399 10.2796 1.91733 10.1427C1.97093 10.0058 2.04235 9.86591 2.13159 9.72306C2.22087 9.58022 2.28634 9.45522 2.32801 9.34809C2.37565 9.2231 2.45451 9.00883 2.56459 8.70528C2.67471 8.40173 2.7625 8.16961 2.82797 8.0089C2.89348 7.8482 2.98276 7.66667 3.09581 7.4643C3.20889 7.26194 3.32495 7.10123 3.44399 6.9822C4.0987 6.13107 4.46773 5.55076 4.55106 5.24126C4.47959 4.57464 4.43197 3.65209 4.40821 2.47361C4.39629 1.93793 4.46772 1.48707 4.62247 1.12103C4.77723 0.754985 5.09268 0.443996 5.56883 0.188063C5.80096 0.0630721 6.11046 0.000576622 6.49734 0.000576622C6.81279 -0.00537893 7.12824 0.0347988 7.4437 0.12111C7.75915 0.207412 8.024 0.330915 8.23827 0.491618C8.57753 0.741599 8.84984 1.10318 9.05518 1.57636C9.26052 2.04954 9.34831 2.48849 9.31855 2.89322C9.28877 3.45866 9.37805 4.09551 9.58639 4.80379C9.78875 5.47636 10.1846 6.12512 10.7738 6.75008C11.1012 7.10124 11.3973 7.58632 11.6621 8.20532C11.927 8.82432 12.1041 9.39273 12.1933 9.91055C12.241 10.2022 12.2559 10.4537 12.238 10.665C12.2201 10.8763 12.1844 11.0414 12.1308 11.1605C12.0772 11.2795 12.0177 11.345 11.9522 11.3569C11.8927 11.3688 11.8228 11.4253 11.7424 11.5265C11.6621 11.6277 11.5817 11.7333 11.5014 11.8434C11.421 11.9536 11.3005 12.0532 11.1398 12.1425C10.9791 12.2318 10.7976 12.2735 10.5952 12.2675C10.4881 12.2616 10.3943 12.2467 10.314 12.2229C10.2336 12.1991 10.1667 12.1589 10.1131 12.1023C10.0595 12.0458 10.0193 11.9997 9.99256 11.964C9.96581 11.9282 9.93159 11.8672 9.8899 11.7809C9.84821 11.6946 9.82141 11.6366 9.8095 11.6068C9.67855 11.3866 9.55654 11.2973 9.44344 11.339C9.33036 11.3807 9.24704 11.5265 9.19347 11.7765C9.13987 12.0265 9.16072 12.3151 9.256 12.6425C9.37504 13.0591 9.37816 13.6394 9.26534 14.3834C9.20587 14.7703 9.25944 15.0694 9.42604 15.2807C9.5927 15.492 9.80995 15.5902 10.0778 15.5753C10.3456 15.5604 10.5986 15.4548 10.8367 15.2584C11.1878 14.9667 11.4542 14.7688 11.6357 14.6646C11.8172 14.5605 12.1252 14.434 12.5597 14.2852C12.8752 14.1781 13.1043 14.0695 13.2472 13.9593C13.39 13.8492 13.4451 13.7466 13.4123 13.6513C13.3796 13.5561 13.3052 13.4713 13.1891 13.3969C13.0731 13.3225 12.9198 13.2526 12.7294 13.1871C12.533 13.1216 12.3856 12.9788 12.2874 12.7585C12.1892 12.5383 12.1446 12.3226 12.1535 12.1113C12.1624 11.9 12.2085 11.7586 12.2919 11.6872C12.2981 11.8717 12.3219 12.0398 12.3634 12.1916C12.4051 12.3434 12.4482 12.4639 12.4928 12.5532C12.5375 12.6425 12.5985 12.7273 12.6759 12.8076C12.7533 12.888 12.8158 12.9445 12.8633 12.9773C12.911 13.01 12.975 13.0487 13.0553 13.0933C13.1357 13.138 13.1838 13.1663 13.2016 13.1782Z"
        fill={color}
      />
    </svg>
  )
}
