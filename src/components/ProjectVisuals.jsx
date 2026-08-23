import React, { useRef, useEffect, useState, useContext } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionLink from './TransitionLink';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Compiler aliases
const $ = { jsx, jsxs, Fragment };
const x = { useRef, useEffect, useState, useContext };
const Js = gsap;
const Z = ScrollTrigger;
const wn = Link;
const Ld = TransitionLink;

// NewJoule gallery image arrays
export const Mf = [
    {
        src: '/nj/dashboard.webp',
        alt: 'The NewJoule dashboard: consumption for today and this month in kWh and dirhams, a T1/T2/T3 tariff bar, an instantaneous power gauge, a twelve-month comparison chart, an alert list, and a breakdown of consumption by appliance.',
        caption: 'Cost beside every figure; the tariff band under the headline numbers.',
        span: 'full'
    },
    {
        src: '/nj/planning-overview.webp',
        alt: 'The planning screen showing a month-long timeline of coloured operating blocks per device, with tabs for manual planning and AI planning, and a device panel grouped by planned, unplanned and disconnected.',
        caption: 'A month of planning. Manual and AI modes share one timeline.',
        span: 'full'
    },
    {
        src: '/nj/device-planning.webp',
        alt: 'Device planning screen with a weekly grid of operating blocks and a command panel for days, hours, power, temperature and colour.',
        caption: 'Drawing a plan for one device, and seeing its cost as you draw.'
    },
    {
        src: '/nj/device-details.webp',
        alt: 'Device detail screen showing the machine, its alerts, the active plan on a weekly grid, and total consumption with cost.',
        caption: 'A single device: its alerts, its active plan, what it costs.'
    }
];

export const Nf = [
    {
        src: '/nj/tariff-card.webp',
        alt: 'Consumption card showing today and this month with costs, above a T1/T2/T3 tariff bar with the current position filled.',
        caption: 'Tariff card'
    },
    {
        src: '/nj/scheduler.webp',
        alt: 'A weekly scheduling grid with a tooltip showing duration, power state, temperature and resulting consumption and cost.',
        caption: 'Schedule block, with its cost'
    },
    {
        src: '/nj/consumption-split.webp',
        alt: 'A donut chart of total consumption broken down by appliance with a per-device list.',
        caption: 'Breakdown by appliance'
    },
    {
        src: '/nj/power-gauge.webp',
        alt: 'A gauge showing instantaneous power draw of 341 watts.',
        caption: 'Instantaneous draw'
    }
];

// ==========================================
// VISUAL: af
// ==========================================
export function af() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 690`,
            role: `img`,
            "aria-label": `Abstraction of the teleconsultation screen: a rail of connected specialists, a shared diagnostic viewport, and a toolbar of connected medical devices.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `666`,
                rx: `10`
            }), (0, $.jsxs)(`g`, {
                className: `cv-chrome`,
                children: [(0, $.jsx)(`rect`, {
                    x: `44`,
                    y: `46`,
                    width: `46`,
                    height: `14`,
                    rx: `3`
                }), (0, $.jsx)(`rect`, {
                    x: `104`,
                    y: `46`,
                    width: `120`,
                    height: `14`,
                    rx: `7`
                }), (0, $.jsx)(`rect`, {
                    x: `530`,
                    y: `48`,
                    width: `86`,
                    height: `10`,
                    rx: `5`
                }), (0, $.jsx)(`rect`, {
                    x: `636`,
                    y: `48`,
                    width: `52`,
                    height: `10`,
                    rx: `5`
                }), (0, $.jsx)(`circle`, {
                    cx: `1120`,
                    cy: `53`,
                    r: `5`
                }), (0, $.jsx)(`circle`, {
                    cx: `1144`,
                    cy: `53`,
                    r: `5`
                })]
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `86`,
                x2: `1156`,
                y2: `86`
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `44`,
                y: `122`,
                children: `CONSULTATION · DERMATOLOGY`
            }), (0, $.jsx)(`text`, {
                className: `cv-label cv-dim`,
                x: `44`,
                y: `142`,
                children: `UNIT 12 · BOX 2`
            }), (0, $.jsx)(`text`, {
                className: `cv-time`,
                x: `600`,
                y: `134`,
                textAnchor: `middle`,
                children: `12:04`
            }), (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`circle`, {
                    className: `cv-accent-fill`,
                    cx: `1084`,
                    cy: `128`,
                    r: `5`
                }), (0, $.jsx)(`text`, {
                    className: `cv-label cv-dim`,
                    x: `1098`,
                    y: `132`,
                    children: `REC`
                })]
            }), (0, $.jsxs)(`g`, {
                className: `cv-tile`,
                children: [(0, $.jsx)(`rect`, {
                    x: `44`,
                    y: `168`,
                    width: `248`,
                    height: `150`,
                    rx: `6`
                }), (0, $.jsx)(`rect`, {
                    x: `44`,
                    y: `336`,
                    width: `248`,
                    height: `150`,
                    rx: `6`
                })]
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `60`,
                y: `300`,
                children: `SPECIALIST 01`
            }), (0, $.jsx)(`text`, {
                className: `cv-label cv-dim`,
                x: `60`,
                y: `468`,
                children: `SPECIALIST 02`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `60`,
                y: `286`,
                children: `DERMATOLOGY`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `60`,
                y: `454`,
                children: `ENT`
            }), (0, $.jsx)(`rect`, {
                className: `cv-viewport`,
                x: `316`,
                y: `168`,
                width: `840`,
                height: `318`,
                rx: `6`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `316`,
                y1: `206`,
                x2: `1156`,
                y2: `206`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `332`,
                y: `192`,
                children: `SHARED DIAGNOSTIC FEED`
            }), (0, $.jsxs)(`g`, {
                className: `cv-crosshair`,
                children: [(0, $.jsx)(`line`, {
                    x1: `736`,
                    y1: `300`,
                    x2: `736`,
                    y2: `392`
                }), (0, $.jsx)(`line`, {
                    x1: `690`,
                    y1: `346`,
                    x2: `782`,
                    y2: `346`
                }), (0, $.jsx)(`circle`, {
                    cx: `736`,
                    cy: `346`,
                    r: `34`
                })]
            }), (0, $.jsx)(`rect`, {
                className: `cv-tray`,
                x: `44`,
                y: `524`,
                width: `784`,
                height: `122`,
                rx: `8`
            }), [`Stetho`, `ECG`, `Oto`, `Ophtha`, `Derma`, `Echo`, `Spiro`].map((e, t) => {
                let n = 106 + t * 112;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`circle`, {
                        className: t === 4 ? `cv-device cv-device-on` : `cv-device`,
                        cx: n,
                        cy: `570`,
                        r: `21`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n,
                        y: `614`,
                        textAnchor: `middle`,
                        children: e.toUpperCase()
                    })]
                }, e)
            }), (0, $.jsx)(`rect`, {
                className: `cv-tray`,
                x: `852`,
                y: `524`,
                width: `304`,
                height: `122`,
                rx: `8`
            }), (0, $.jsx)(`circle`, {
                className: `cv-device`,
                cx: `912`,
                cy: `585`,
                r: `21`
            }), (0, $.jsx)(`circle`, {
                className: `cv-device`,
                cx: `968`,
                cy: `585`,
                r: `21`
            }), (0, $.jsx)(`circle`, {
                className: `cv-accent-fill`,
                cx: `1024`,
                cy: `585`,
                r: `21`
            }), (0, $.jsx)(`circle`, {
                className: `cv-device`,
                cx: `1080`,
                cy: `585`,
                r: `21`
            }), (0, $.jsx)(`circle`, {
                className: `cv-device`,
                cx: `1136`,
                cy: `585`,
                r: `21`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The teleconsultation screen, redrawn. All labels invented.`
        })]
    })
}

// ==========================================
// VISUAL: of
// ==========================================
export function of() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 520`,
            role: `img`,
            "aria-label": `Diagram: a mobile medical unit connects through the central telehealth platform to a pool of five specialties, which returns a diagnosis and prescription.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `40`,
                y: `176`,
                width: `228`,
                height: `118`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `64`,
                y: `222`,
                children: `MOBILE UNIT`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `64`,
                y: `246`,
                children: `GP · 2 NURSES`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `64`,
                y: `266`,
                children: `CONNECTED DEVICES`
            }), (0, $.jsx)(`line`, {
                className: `cv-link`,
                x1: `268`,
                y1: `235`,
                x2: `452`,
                y2: `235`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `360`,
                y: `222`,
                textAnchor: `middle`,
                children: `LOW BANDWIDTH`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-key`,
                x: `452`,
                y: `146`,
                width: `248`,
                height: `178`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `476`,
                y: `192`,
                children: `TELEHEALTH`
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `476`,
                y: `214`,
                children: `PLATFORM`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `476`,
                y1: `238`,
                x2: `676`,
                y2: `238`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `476`,
                y: `262`,
                children: `TRIAGE · RECORDS`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `476`,
                y: `282`,
                children: `ROUTING · CAPTURE`
            }), [`Cardiology`, `Dermatology`, `Paediatrics`, `Endocrinology`, `Gynaecology`].map((e, t) => {
                let n = 42 + t * 82;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`path`, {
                        className: `cv-link`,
                        d: `M700 235 C 780 235, 800 ${n+22}, 880 ${n+22}`,
                        fill: `none`
                    }), (0, $.jsx)(`rect`, {
                        className: `cv-node`,
                        x: `880`,
                        y: n,
                        width: `280`,
                        height: `44`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: `904`,
                        y: n + 28,
                        children: e.toUpperCase()
                    })]
                }, e)
            }), (0, $.jsx)(`path`, {
                className: `cv-link cv-link-accent`,
                d: `M1020 466 L 154 466 L 154 294`,
                fill: `none`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `560`,
                y: `456`,
                textAnchor: `middle`,
                children: `DIAGNOSIS · PRESCRIPTION · REFERRAL`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `How a unit reaches a specialist, and what comes back.`
        })]
    })
}

// ==========================================
// VISUAL: sf
// ==========================================
export function sf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 560`,
            role: `img`,
            "aria-label": `User flow: arrival, nurse intake, GP consultation, then a decision point. Most cases resolve on site; about 9 percent escalate to a specialist tele-expertise session; under 2.5 percent are referred to hospital. All paths end in a prescription and a digital record.`,
            children: [
                [
                    [`ARRIVAL`, `WALK-IN`, 30],
                    [`INTAKE`, `NURSE · VITALS`, 258],
                    [`CONSULTATION`, `GP`, 486]
                ].map(([e, t, n]) => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-node`,
                        x: n,
                        y: `196`,
                        width: `196`,
                        height: `86`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 20,
                        y: `234`,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 20,
                        y: `258`,
                        children: t
                    })]
                }, e)), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `226`,
                    y1: `239`,
                    x2: `258`,
                    y2: `239`
                }), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `454`,
                    y1: `239`,
                    x2: `486`,
                    y2: `239`
                }), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `682`,
                    y1: `239`,
                    x2: `722`,
                    y2: `239`
                }), (0, $.jsx)(`path`, {
                    className: `cv-node`,
                    d: `M756 191 L 812 239 L 756 287 L 700 239 Z`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `756`,
                    y: `168`,
                    textAnchor: `middle`,
                    children: `SPECIALIST NEEDED?`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M756 191 L 756 96 L 852 96`,
                    fill: `none`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `768`,
                    y: `140`,
                    children: `9%`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node cv-node-key`,
                    x: `852`,
                    y: `62`,
                    width: `212`,
                    height: `68`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `872`,
                    y: `92`,
                    children: `TELE-EXPERTISE`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `872`,
                    y: `114`,
                    children: `5 SPECIALTIES`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M756 287 L 756 382 L 852 382`,
                    fill: `none`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `768`,
                    y: `340`,
                    children: `91%`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node`,
                    x: `852`,
                    y: `348`,
                    width: `212`,
                    height: `68`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `872`,
                    y: `378`,
                    children: `RESOLVED ON SITE`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `872`,
                    y: `400`,
                    children: `TREAT · SCREEN`
                }), (0, $.jsx)(`line`, {
                    className: `cv-link cv-link-accent`,
                    x1: `958`,
                    y1: `62`,
                    x2: `958`,
                    y2: `28`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `978`,
                    y: `34`,
                    children: `<2.5% HOSPITAL`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M1064 96 L 1124 96 L 1124 470`,
                    fill: `none`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M958 416 L 958 470`,
                    fill: `none`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node cv-node-key`,
                    x: `30`,
                    y: `470`,
                    width: `1140`,
                    height: `62`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `600`,
                    y: `507`,
                    textAnchor: `middle`,
                    children: `PRESCRIPTION · DIGITAL RECORD · FOLLOW-UP`
                })
            ]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Of the 66,745 first-quarter cases that went one way or the other, 60,778 resolved on site and 5,967 escalated. Referrals stayed under 2.5%.`
        })]
    })
}

// ==========================================
// VISUAL: cf
// ==========================================
export function cf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 700`,
            role: `img`,
            "aria-label": `Empathy map for a rural woman patient, divided into what she says, thinks, does and feels, with the underlying access barriers listed below.`,
            children: [
                [{
                    title: `SAYS`,
                    x: 30,
                    y: 70,
                    lines: [`“The hospital is far.”`, `“I will go when it gets`, `worse.”`]
                }, {
                    title: `THINKS`,
                    x: 616,
                    y: 70,
                    lines: [`What does the trip cost?`, `Who covers the day`, `I do not work?`]
                }, {
                    title: `DOES`,
                    x: 30,
                    y: 330,
                    lines: [`Delays care until it is`, `urgent. Travels with`, `family. Pays out of pocket.`]
                }, {
                    title: `FEELS`,
                    x: 616,
                    y: 330,
                    lines: [`Reluctant about screening.`, `Wary of a diagnosis far`, `from home.`]
                }].map(e => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-node`,
                        x: e.x,
                        y: e.y,
                        width: `554`,
                        height: `220`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-label cv-dim`,
                        x: e.x + 28,
                        y: e.y + 44,
                        children: e.title
                    }), e.lines.map((t, n) => (0, $.jsx)(`text`, {
                        className: `cv-body`,
                        x: e.x + 28,
                        y: e.y + 96 + n * 32,
                        children: t
                    }, n))]
                }, e.title)), (0, $.jsx)(`circle`, {
                    className: `cv-node cv-node-key`,
                    cx: `600`,
                    cy: `290`,
                    r: `76`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `600`,
                    y: `284`,
                    textAnchor: `middle`,
                    children: `RURAL PATIENT`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `600`,
                    y: `308`,
                    textAnchor: `middle`,
                    children: `63% WOMEN`
                }), (0, $.jsx)(`line`, {
                    className: `cv-rule`,
                    x1: `30`,
                    y1: `606`,
                    x2: `1170`,
                    y2: `606`
                }), [
                    [`40%`, `TRAVEL OVER 10 KM`],
                    [`63.3 km`, `MEDIAN TO A HOSPITAL`],
                    [`7.8`, `DOCTORS PER 10,000`]
                ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`text`, {
                        className: `cv-micro cv-accent`,
                        x: 30 + n * 390,
                        y: `654`,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: 30 + n * 390 + 88,
                        y: `654`,
                        children: t
                    })]
                }, t))
            ]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The majority user. Reconstructed for this case study from published research on rural healthcare access in Morocco. The field interviews behind the original work stay with the client.`
        })]
    })
}

// ==========================================
// VISUAL: lf
// ==========================================
export function lf() {
    let e = [{
            label: `DECIDE`,
            note: `COST · TIME OFF`,
            e: 268,
            owned: !1
        }, {
            label: `TRAVEL`,
            note: `OVER 10 KM`,
            e: 292,
            owned: !1
        }, {
            label: `ARRIVE`,
            note: `QUEUE · NO SLOT`,
            e: 300,
            owned: !1
        }, {
            label: `INTAKE`,
            note: `NURSE · VITALS`,
            e: 236,
            owned: !0
        }, {
            label: `CONSULT`,
            note: `GP ON SITE`,
            e: 186,
            owned: !0
        }, {
            label: `ESCALATE`,
            note: `SPECIALIST LINK`,
            e: 208,
            owned: !0
        }, {
            label: `OUTCOME`,
            note: `SCRIPT · RECORD`,
            e: 148,
            owned: !0
        }],
        t = e => 78 + e * 174;
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 560`,
            role: `img`,
            "aria-label": `Journey map across seven stages, from deciding to seek care through to the outcome, with an emotional curve above and a band below showing that the product only covers the last four stages.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `104`,
                children: `CONFIDENCE`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `124`,
                x2: `1170`,
                y2: `124`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `318`,
                x2: `1170`,
                y2: `318`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: e.map((e, n) => `${t(n)},${e.e}`).join(` `)
            }), e.map((e, n) => (0, $.jsx)(`circle`, {
                className: e.e < 200 ? `cv-dot cv-dot-high` : `cv-dot`,
                cx: t(n),
                cy: e.e,
                r: `5`
            }, e.label)), e.map((e, n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: t(n),
                    y: `356`,
                    textAnchor: `middle`,
                    children: e.label
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: t(n),
                    y: `378`,
                    textAnchor: `middle`,
                    children: e.note
                })]
            }, e.label)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `440`,
                children: `WHERE THE PRODUCT EXISTS`
            }), e.map((e, n) => (0, $.jsx)(`rect`, {
                className: e.owned ? `cv-own cv-own-on` : `cv-own`,
                x: t(n) - 72,
                y: `458`,
                width: `144`,
                height: `34`,
                rx: `4`
            }, e.label))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Journey map. The software only covers the last four stages; the first three are the access problem the mobile units themselves were built to solve. Worth being honest about which part design owns.`
        })]
    })
}

// ==========================================
// VISUAL: uf
// ==========================================
export function uf() {
    return (0, $.jsx)(`figure`, {
        className: `cv`,
        children: (0, $.jsx)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `Information architecture: three products — the telehealth platform, the monitoring dashboard and the training portal — each broken into its main sections, all sharing one component library.`,
            children: [{
                root: `TELEHEALTH PLATFORM`,
                sub: `UNIT · TABLET + DESKTOP`,
                children: [`Patient record`, `Consultation flow`, `Tele-expertise session`, `Screening protocols`, `Report & prescription`]
            }, {
                root: `MONITORING DASHBOARD`,
                sub: `MINISTRY · WEEKLY REVIEW`,
                children: [`National overview`, `Regional breakdown`, `Per-unit status`, `Screening coverage`, `Export`]
            }, {
                root: `TRAINING PORTAL`,
                sub: `FIELD STAFF · FR / EN`,
                children: [`Guided tutorials`, `Standard procedures`, `Downloads`, `Device guides`]
            }].map((e, t) => {
                let n = 30 + t * 390;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-node cv-node-key`,
                        x: n,
                        y: `30`,
                        width: 350,
                        height: `76`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 24,
                        y: `62`,
                        children: e.root
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 24,
                        y: `86`,
                        children: e.sub
                    }), e.children.map((e, t) => {
                        let r = 140 + t * 62;
                        return (0, $.jsxs)(`g`, {
                            children: [(0, $.jsx)(`path`, {
                                className: `cv-link`,
                                d: `M${n+24} 106 L ${n+24} ${r+22} L ${n+48} ${r+22}`,
                                fill: `none`
                            }), (0, $.jsx)(`rect`, {
                                className: `cv-node`,
                                x: n + 48,
                                y: r,
                                width: 302,
                                height: `44`,
                                rx: `4`
                            }), (0, $.jsx)(`text`, {
                                className: `cv-body`,
                                x: n + 70,
                                y: r + 29,
                                children: e
                            })]
                        }, e)
                    })]
                }, e.root)
            })
        })
    })
}

// ==========================================
// VISUAL: df
// ==========================================
export function df() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 690`,
            role: `img`,
            "aria-label": `Abstraction of the energy dashboard: today's and this month's consumption each shown with its cost, a permanent tariff-band indicator, a twelve-month trend, a breakdown by device category, and an alert list.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `666`,
                rx: `10`
            }), [
                [`TODAY`, `14.2`, `kWh`, `31 MAD`],
                [`THIS MONTH`, `287.4`, `kWh`, `212 MAD`]
            ].map(([e, t, n, r], i) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 44 + i * 300,
                    y: `72`,
                    children: e
                }), (0, $.jsx)(`text`, {
                    className: `cv-figure`,
                    x: 44 + i * 300,
                    y: `126`,
                    children: t
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 44 + i * 300,
                    y: `152`,
                    children: n
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: 150 + i * 300,
                    y: `126`,
                    children: r
                })]
            }, e)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `204`,
                children: `TARIFF BAND`
            }), [`T1`, `T2`, `T3`].map((e, t) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: t === 1 ? `cv-band cv-band-on` : `cv-band`,
                    x: 44 + t * 216,
                    y: `222`,
                    width: `200`,
                    height: `34`,
                    rx: `4`
                }), (0, $.jsx)(`text`, {
                    className: t === 1 ? `cv-micro cv-accent` : `cv-micro cv-dim`,
                    x: 144 + t * 216,
                    y: `244`,
                    textAnchor: `middle`,
                    children: e
                })]
            }, e)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `44`,
                y: `292`,
                children: `72 kWh BEFORE THE NEXT BAND`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `330`,
                x2: `700`,
                y2: `330`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `364`,
                children: `TWELVE MONTHS`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `530`,
                x2: `700`,
                y2: `530`
            }), [78, 72, 64, 58, 52, 48, 44, 50, 58, 66, 74, 82].map((e, t) => (0, $.jsx)(`rect`, {
                className: t === 6 ? `cv-bar cv-bar-peak` : `cv-bar`,
                x: 56 + t * 54,
                y: 530 - e * 1.5,
                width: `34`,
                height: e * 1.5,
                rx: `2`
            }, t)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `562`,
                children: `LOWEST MONTH · 30% UNDER THE SAME MONTH LAST YEAR`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `752`,
                y1: `330`,
                x2: `1156`,
                y2: `330`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `752`,
                y: `364`,
                children: `BY CATEGORY`
            }), [
                [`LIGHTING`, 34],
                [`COOLING`, 26],
                [`MACHINES`, 22],
                [`OTHER`, 18]
            ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `752`,
                    y: 406 + n * 42,
                    children: e
                }), (0, $.jsx)(`rect`, {
                    className: n === 0 ? `cv-bar cv-bar-peak` : `cv-bar`,
                    x: `920`,
                    y: 392 + n * 42,
                    width: t * 5.4,
                    height: `18`,
                    rx: `2`
                }), (0, $.jsxs)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `1156`,
                    y: 406 + n * 42,
                    textAnchor: `end`,
                    children: [t, `%`]
                })]
            }, e)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `752`,
                y1: `560`,
                x2: `1156`,
                y2: `560`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-hot`,
                x: `752`,
                y: `580`,
                width: `404`,
                height: `72`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `776`,
                y: `612`,
                children: `LEFT RUNNING 6H`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `776`,
                y: `636`,
                children: `MACHINE · UNPLANNED`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `1020`,
                y: `598`,
                width: `112`,
                height: `36`,
                rx: `5`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro`,
                x: `1076`,
                y: `621`,
                textAnchor: `middle`,
                children: `TURN OFF`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The dashboard, redrawn. All figures invented.`
        })]
    })
}

// ==========================================
// VISUAL: ff
// ==========================================
export function ff() {
    return (0, $.jsx)(`figure`, {
        className: `cv`,
        children: (0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 480`,
            role: `img`,
            "aria-label": `A stepped cost curve across three tariff bands, showing that each additional kilowatt-hour costs more once a band is crossed, next to a flat line showing what users wrongly assume.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `56`,
                children: `COST`
            }), (0, $.jsx)(`line`, {
                className: `cv-link`,
                x1: `120`,
                y1: `330`,
                x2: `1000`,
                y2: `196`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `1014`,
                y: `196`,
                children: `WHAT PEOPLE ASSUME`
            }), (0, $.jsx)(`path`, {
                className: `cv-curve cv-curve-accent`,
                d: `M120 330 L 413 288 L 413 288 L 706 214 L 706 214 L 1000 84`,
                fill: `none`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `1014`,
                y: `84`,
                children: `WHAT THE BILL DOES`
            }), [413, 706].map(e => (0, $.jsx)(`line`, {
                className: `cv-threshold-warn`,
                x1: e,
                y1: `70`,
                x2: e,
                y2: `360`
            }, e)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `120`,
                y1: `360`,
                x2: `1000`,
                y2: `360`
            }), [
                [`T1`, `LOW USE`, 120],
                [`T2`, `MID`, 413],
                [`T3`, `HIGH · EVERY UNIT COSTS MOST`, 706]
            ].map(([e, t, n]) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: n + 16,
                    y: `392`,
                    children: e
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: n + 16,
                    y: `414`,
                    children: t
                })]
            }, e))]
        })
    })
}

// ==========================================
// VISUAL: pf
// ==========================================
export function pf() {
    return (0, $.jsx)(`figure`, {
        className: `cv`,
        children: (0, $.jsx)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `Two personas — a household user in Casablanca and a workshop facility manager — each with their own words, their goal, and the thing standing in their way.`,
            children: [{
                name: `SALMA`,
                role: `HOUSEHOLD · CASABLANCA`,
                quote: [`“The bill arrives and it is`, `higher than last month.`, `I never know why.”`],
                goal: `STOP BEING SURPRISED`,
                block: `CHECKS ONCE A MONTH, TOO LATE TO ACT`,
                accent: !1
            }, {
                name: `YOUNES`,
                role: `FACILITY MANAGER · WORKSHOP`,
                quote: [`“I can shift when machines`, `run. I just cannot see what`, `that would save me.”`],
                goal: `CUT COST WITHOUT STOPPING PRODUCTION`,
                block: `WILL NOT TRUST A SCHEDULE HE CANNOT INSPECT`,
                accent: !0
            }].map((e, t) => {
                let n = 30 + t * 590;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: e.accent ? `cv-node cv-node-key` : `cv-node`,
                        x: n,
                        y: `30`,
                        width: `550`,
                        height: `410`,
                        rx: `8`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-label`,
                        x: n + 36,
                        y: `82`,
                        children: e.name
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `110`,
                        children: e.role
                    }), (0, $.jsx)(`line`, {
                        className: `cv-rule`,
                        x1: n + 36,
                        y1: `140`,
                        x2: n + 514,
                        y2: `140`
                    }), e.quote.map((t, r) => (0, $.jsx)(`text`, {
                        className: e.accent ? `cv-body cv-quote-on` : `cv-body`,
                        x: n + 36,
                        y: 190 + r * 32,
                        children: t
                    }, r)), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `322`,
                        children: `GOAL`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 36,
                        y: `348`,
                        children: e.goal
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `392`,
                        children: `WHAT STOPS THEM`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-accent`,
                        x: n + 36,
                        y: `418`,
                        children: e.block
                    })]
                }, e.name)
            })
        })
    })
}

// ==========================================
// VISUAL: mf
// ==========================================
export function mf() {
    let e = [{
            label: `BILL ARRIVES`,
            note: `SHOCK`,
            e: 300,
            act: !1
        }, {
            label: `WEEK 1`,
            note: `RESOLVE TO DO BETTER`,
            e: 236,
            act: !0
        }, {
            label: `WEEK 2`,
            note: `FORGETS`,
            e: 268,
            act: !0
        }, {
            label: `WEEK 3`,
            note: `PEAK USE, UNNOTICED`,
            e: 292,
            act: !0
        }, {
            label: `WEEK 4`,
            note: `BAND CROSSED`,
            e: 316,
            act: !0
        }, {
            label: `BILL ARRIVES`,
            note: `SHOCK AGAIN`,
            e: 330,
            act: !1
        }],
        t = e => 96 + e * 202;
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 520`,
            role: `img`,
            "aria-label": `The monthly billing cycle. Attention peaks when the bill arrives, by which point nothing can be changed; the weeks when action is actually possible are the weeks nobody is paying attention.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `96`,
                children: `ATTENTION`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `116`,
                x2: `1170`,
                y2: `116`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `352`,
                x2: `1170`,
                y2: `352`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: e.map((e, n) => `${t(n)},${e.e}`).join(` `)
            }), e.map((e, n) => (0, $.jsx)(`circle`, {
                className: e.act ? `cv-dot` : `cv-dot cv-dot-high`,
                cx: t(n),
                cy: e.e,
                r: `5`
            }, n)), e.map((e, n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: t(n),
                    y: `390`,
                    textAnchor: `middle`,
                    children: e.label
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: t(n),
                    y: `412`,
                    textAnchor: `middle`,
                    children: e.note
                }), (0, $.jsx)(`rect`, {
                    className: e.act ? `cv-own cv-own-on` : `cv-own`,
                    x: t(n) - 84,
                    y: `440`,
                    width: `168`,
                    height: `30`,
                    rx: `4`
                })]
            }, e.label + n))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The billing cycle, and the gap the product exists to close.`
        })]
    })
}

// ==========================================
// VISUAL: hf
// ==========================================
export function hf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 520`,
            role: `img`,
            "aria-label": `User flow from opening the dashboard to an active schedule, with a decision point offering either a hand-drawn plan or a generated one, both converging on the same review and activation step.`,
            children: [
                [
                    [`OPEN`, `DASHBOARD`, 30],
                    [`SEE BAND`, `CLOSE TO NEXT`, 258],
                    [`FIND CAUSE`, `WHICH DEVICE`, 486]
                ].map(([e, t, n]) => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-node`,
                        x: n,
                        y: `196`,
                        width: `196`,
                        height: `82`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 22,
                        y: `230`,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 22,
                        y: `254`,
                        children: t
                    })]
                }, e)), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `226`,
                    y1: `237`,
                    x2: `258`,
                    y2: `237`
                }), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `454`,
                    y1: `237`,
                    x2: `486`,
                    y2: `237`
                }), (0, $.jsx)(`line`, {
                    className: `cv-link`,
                    x1: `682`,
                    y1: `237`,
                    x2: `722`,
                    y2: `237`
                }), (0, $.jsx)(`path`, {
                    className: `cv-node`,
                    d: `M778 189 L 834 237 L 778 285 L 722 237 Z`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `778`,
                    y: `166`,
                    textAnchor: `middle`,
                    children: `PLAN IT HOW?`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M778 189 L 778 104 L 874 104`,
                    fill: `none`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node`,
                    x: `874`,
                    y: `70`,
                    width: `230`,
                    height: `68`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `896`,
                    y: `100`,
                    children: `DRAW IT`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `896`,
                    y: `122`,
                    children: `FULL CONTROL`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M778 285 L 778 370 L 874 370`,
                    fill: `none`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node cv-node-key`,
                    x: `874`,
                    y: `336`,
                    width: `230`,
                    height: `68`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `896`,
                    y: `366`,
                    children: `GENERATE IT`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `896`,
                    y: `388`,
                    children: `FROM HISTORY`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M1104 104 L 1150 104 L 1150 452`,
                    fill: `none`
                }), (0, $.jsx)(`path`, {
                    className: `cv-link`,
                    d: `M1104 370 L 1150 370`,
                    fill: `none`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-node cv-node-hot`,
                    x: `30`,
                    y: `426`,
                    width: `1120`,
                    height: `56`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `590`,
                    y: `460`,
                    textAnchor: `middle`,
                    children: `REVIEW COST · ADJUST · ACTIVATE`
                })
            ]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Both paths end in the same review step.`
        })]
    })
}

// ==========================================
// VISUAL: gf
// ==========================================
export function gf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 500`,
            role: `img`,
            "aria-label": `Three low-fidelity explorations of the scheduling task: a form, a per-device list, and a drawable timeline. The timeline was chosen.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `52`,
                children: `V1 · FORM`
            }), (0, $.jsx)(`rect`, {
                className: `cv-wire`,
                x: `30`,
                y: `72`,
                width: `340`,
                height: `280`,
                rx: `6`
            }), [0, 1, 2, 3].map(e => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: `cv-wire-field`,
                    x: `58`,
                    y: 110 + e * 58,
                    width: `120`,
                    height: `18`,
                    rx: `3`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-wire-field`,
                    x: `196`,
                    y: 110 + e * 58,
                    width: `146`,
                    height: `30`,
                    rx: `4`
                })]
            }, e)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `392`,
                children: `READS AS ADMIN.`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `414`,
                children: `NO SENSE OF THE DAY`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `436`,
                children: `AS A WHOLE.`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `430`,
                y: `52`,
                children: `V2 · LIST PER DEVICE`
            }), (0, $.jsx)(`rect`, {
                className: `cv-wire`,
                x: `430`,
                y: `72`,
                width: `340`,
                height: `280`,
                rx: `6`
            }), [0, 1, 2, 3, 4].map(e => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`circle`, {
                    className: `cv-wire-field`,
                    cx: `470`,
                    cy: 116 + e * 48,
                    r: `9`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-wire-field`,
                    x: `492`,
                    y: 106 + e * 48,
                    width: `150`,
                    height: `18`,
                    rx: `3`
                }), (0, $.jsx)(`rect`, {
                    className: `cv-wire-field`,
                    x: `664`,
                    y: 106 + e * 48,
                    width: `78`,
                    height: `18`,
                    rx: `9`
                })]
            }, e)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `430`,
                y: `392`,
                children: `BETTER PER DEVICE.`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `430`,
                y: `414`,
                children: `IMPOSSIBLE TO SEE`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `430`,
                y: `436`,
                children: `OVERLAP ACROSS DEVICES.`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `830`,
                y: `52`,
                children: `V3 · DRAWABLE TIMELINE`
            }), (0, $.jsx)(`rect`, {
                className: `cv-wire cv-wire-on`,
                x: `830`,
                y: `72`,
                width: `340`,
                height: `280`,
                rx: `6`
            }), [
                [
                    [0, 5],
                    [9, 4]
                ],
                [
                    [3, 6],
                    [12, 3]
                ],
                [
                    [1, 3],
                    [7, 6]
                ],
                [
                    [0, 14]
                ],
                [
                    [5, 4],
                    [11, 3]
                ]
            ].map((e, t) => e.map(([e, n], r) => (0, $.jsx)(`rect`, {
                className: `cv-plan-auto`,
                x: 858 + e * 19,
                y: 108 + t * 48,
                width: n * 19 - 3,
                height: `26`,
                rx: `3`
            }, `${t}-${r}`))), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `830`,
                y: `392`,
                children: `THE DAY IS LEGIBLE AT A GLANCE.`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `830`,
                y: `414`,
                children: `OVERLAP, GAPS AND COST`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `830`,
                y: `436`,
                children: `BECOME VISIBLE. CHOSEN.`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `468`,
                x2: `1170`,
                y2: `468`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Three passes at the same task.`
        })]
    })
}

// ==========================================
// VISUAL: _f
// ==========================================
export function _f() {
    return (0, $.jsx)(`figure`, {
        className: `cv`,
        children: (0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `A comparison of the two audiences — a household and a facility — across device count, motivation, failure mode and frequency of use, resolving into one shared component set.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `440`,
                y: `56`,
                children: `HOUSEHOLD`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `820`,
                y: `56`,
                children: `FACILITY`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `78`,
                x2: `1170`,
                y2: `78`
            }), [
                [`DEVICES`, `ABOUT TEN`, `DOZENS`],
                [`DRIVER`, `THE MONTHLY BILL`, `PRODUCTION CONTINUITY`],
                [`A BAD DAY`, `AN EXPENSIVE SURPRISE`, `AN UNPLANNED STOPPAGE`],
                [`CHECKS IT`, `OCCASIONALLY`, `DAILY`]
            ].map(([e, t, n], r) => {
                let i = 126 + r * 74;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: `30`,
                        y: i,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: `cv-body`,
                        x: `440`,
                        y: i,
                        children: t
                    }), (0, $.jsx)(`text`, {
                        className: `cv-body`,
                        x: `820`,
                        y: i,
                        children: n
                    }), (0, $.jsx)(`line`, {
                        className: `cv-rule`,
                        x1: `30`,
                        y1: i + 26,
                        x2: `1170`,
                        y2: i + 26
                    })]
                }, e)
            }), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-key`,
                x: `30`,
                y: `404`,
                width: `1140`,
                height: `46`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `600`,
                y: `433`,
                textAnchor: `middle`,
                children: `DIFFERENT SCALE AND DENSITY, SAME VOCABULARY`
            })]
        })
    })
}

// ==========================================
// VISUAL: vf
// ==========================================
export function vf() {
    let e = [`LIGHTING`, `COOLING`, `MACHINE 01`, `SERVERS`, `PRINTER`],
        t = [
            [
                [2, 5],
                [12, 4]
            ],
            [
                [6, 6],
                [16, 3]
            ],
            [
                [1, 3],
                [9, 7]
            ],
            [
                [0, 20]
            ],
            [
                [8, 4],
                [15, 2]
            ]
        ],
        n = [
            [
                [0, 4],
                [14, 3]
            ],
            [
                [1, 5],
                [17, 2]
            ],
            [
                [0, 6],
                [13, 4]
            ],
            [
                [0, 20]
            ],
            [
                [2, 3],
                [16, 3]
            ]
        ],
        r = (e, t) => e.map((e, n) => e.map(([e, r], i) => (0, $.jsx)(`rect`, {
            className: t === 630 ? `cv-plan cv-plan-auto` : `cv-plan`,
            x: t + e * 18,
            y: 140 + n * 48,
            width: r * 18 - 3,
            height: `30`,
            rx: `3`
        }, `${n}-${i}`)));
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 480`,
            role: `img`,
            "aria-label": `The same five devices scheduled two ways — drawn by hand on the left, generated automatically on the right — rendered in the identical timeline so the automatic result can be inspected and overridden.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro`,
                x: `30`,
                y: `72`,
                children: `DRAWN BY HAND`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `96`,
                children: `FULL CONTROL, FULL EFFORT`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `630`,
                y: `72`,
                children: `GENERATED`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `630`,
                y: `96`,
                children: `FROM HISTORY, PEAK HOURS, PRIORITY`
            }), e.map((e, t) => (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: 160 + t * 48,
                children: e
            }, e)), r(t, 190), r(n, 630)]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `People switch off automation they cannot inspect.`
        })]
    })
}

// ==========================================
// VISUAL: yf
// ==========================================
export function yf() {
    let e = (e, t = 150) => {
            let n = (135 + 270 * e) * Math.PI / 180;
            return [600 + t * Math.cos(n), 352 + t * Math.sin(n)]
        },
        t = (t, n, r = 150) => {
            let [i, a] = e(t, r), [o, s] = e(n, r), c = +(270 * (n - t) > 180);
            return `M${i.toFixed(1)} ${a.toFixed(1)} A ${r} ${r} 0 ${c} 1 ${o.toFixed(1)} ${s.toFixed(1)}`
        };
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 566`,
            role: `img`,
            "aria-label": `Abstraction of an electric-van instrument cluster: a row of regulated warning telltales along the top, battery charge and remaining range on the left, a central speed dial, and drive state with trip distance on the right.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `542`,
                rx: `10`
            }), Array.from({
                length: 9
            }).map((e, t) => (0, $.jsx)(`rect`, {
                className: t === 7 ? `cv-tell cv-tell-on` : `cv-tell`,
                x: 44 + t * 46,
                y: `44`,
                width: `30`,
                height: `22`,
                rx: `3`
            }, t)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `92`,
                x2: `1156`,
                y2: `92`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `60`,
                y: `146`,
                children: `CHARGE`
            }), Array.from({
                length: 5
            }).map((e, t) => (0, $.jsx)(`rect`, {
                className: `cv-batt`,
                x: `60`,
                y: 168 + t * 30,
                width: `86`,
                height: `22`,
                rx: `2`
            }, t)), (0, $.jsx)(`text`, {
                className: `cv-micro`,
                x: `60`,
                y: `344`,
                children: `100%`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `60`,
                y1: `374`,
                x2: `240`,
                y2: `374`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `60`,
                y: `406`,
                children: `RANGE`
            }), (0, $.jsx)(`text`, {
                className: `cv-figure cv-accent`,
                x: `60`,
                y: `462`,
                children: `130`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `60`,
                y: `490`,
                children: `KM REMAINING`
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-track`,
                d: t(0, 1)
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-value`,
                d: t(0, .62)
            }), (0, $.jsx)(`text`, {
                className: `cv-speed`,
                x: `600`,
                y: `368`,
                textAnchor: `middle`,
                children: `62`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `600`,
                y: `400`,
                textAnchor: `middle`,
                children: `KM/H`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `440`,
                y: `500`,
                textAnchor: `middle`,
                children: `ECO`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `760`,
                y: `500`,
                textAnchor: `middle`,
                children: `BOOST`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `1140`,
                y: `146`,
                textAnchor: `end`,
                children: `DRIVE`
            }), [`D`, `N`, `R`].map((e, t) => (0, $.jsx)(`text`, {
                className: t === 0 ? `cv-gear cv-gear-on` : `cv-gear`,
                x: `1140`,
                y: 200 + t * 52,
                textAnchor: `end`,
                children: e
            }, e)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `960`,
                y1: `374`,
                x2: `1140`,
                y2: `374`
            }), [
                [`TOTAL`, `123 km`],
                [`TRIP`, `15.4 km`]
            ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `1140`,
                    y: 412 + n * 56,
                    textAnchor: `end`,
                    children: e
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `1140`,
                    y: 438 + n * 56,
                    textAnchor: `end`,
                    children: t
                })]
            }, e))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The cluster, redrawn from the vehicle’s published specification. Composition and labels are mine.`
        })]
    })
}

// ==========================================
// VISUAL: bf
// ==========================================
export function bf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 690`,
            role: `img`,
            "aria-label": `Abstraction of the reservation screen: the pendulum experiment with its apparatus on the left, free time slots across four days in the middle, and the reservation summary on the right.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `666`,
                rx: `10`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `44`,
                y: `44`,
                width: `330`,
                height: `602`,
                rx: `8`
            }), (0, $.jsx)(`rect`, {
                className: `cv-viewport`,
                x: `72`,
                y: `76`,
                width: `274`,
                height: `240`,
                rx: `6`
            }), (0, $.jsx)(`line`, {
                className: `cv-link`,
                x1: `209`,
                y1: `112`,
                x2: `209`,
                y2: `150`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `150`,
                y1: `112`,
                x2: `268`,
                y2: `112`
            }), (0, $.jsx)(`line`, {
                className: `cv-link`,
                x1: `209`,
                y1: `150`,
                x2: `252`,
                y2: `242`
            }), (0, $.jsx)(`circle`, {
                className: `cv-device cv-device-on`,
                cx: `258`,
                cy: `256`,
                r: `14`
            }), (0, $.jsx)(`path`, {
                className: `cv-crosshair`,
                d: `M209 150 A 96 96 0 0 1 209 246`,
                fill: `none`
            }), (0, $.jsx)(`text`, {
                className: `cv-label`,
                x: `72`,
                y: `366`,
                children: `SIMPLE PENDULUM`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `72`,
                y: `394`,
                children: `PHYSICS · REAL APPARATUS`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `72`,
                y1: `422`,
                x2: `346`,
                y2: `422`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `72`,
                y: `454`,
                children: `MEASURE THE PERIOD OF`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `72`,
                y: `476`,
                children: `OSCILLATION REMOTELY,`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `72`,
                y: `498`,
                children: `ON THE ACTUAL BENCH`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `72`,
                y: `560`,
                children: `ONE BENCH · TIMED SLOTS`
            }), [{
                d: `MON`,
                slots: [`13:00`, `13:40`],
                active: 0
            }, {
                d: `TUE`,
                slots: [`08:30`, `09:10`],
                active: -1
            }, {
                d: `WED`,
                slots: [`10:30`, `11:10`, `11:50`],
                active: -1
            }, {
                d: `THU`,
                slots: [`09:00`, `09:40`],
                active: -1
            }].map((e, t) => {
                let n = 420 + t * 150;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 55,
                        y: `76`,
                        textAnchor: `middle`,
                        children: e.d
                    }), e.slots.map((t, r) => {
                        let i = e.active === r;
                        return (0, $.jsxs)(`g`, {
                            children: [(0, $.jsx)(`rect`, {
                                className: i ? `cv-node cv-node-hot` : `cv-node`,
                                x: n,
                                y: 100 + r * 66,
                                width: `110`,
                                height: `46`,
                                rx: `6`
                            }), (0, $.jsx)(`text`, {
                                className: i ? `cv-micro cv-accent` : `cv-micro cv-dim`,
                                x: n + 55,
                                y: 129 + r * 66,
                                textAnchor: `middle`,
                                children: t
                            })]
                        }, t)
                    })]
                }, e.d)
            }), (0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `420`,
                y: `404`,
                width: `330`,
                height: `242`,
                rx: `8`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `448`,
                y: `442`,
                children: `JANUARY`
            }), Array.from({
                length: 28
            }).map((e, t) => (0, $.jsx)(`circle`, {
                className: t === 8 ? `cv-accent-fill` : `cv-cell-dot`,
                cx: 462 + t % 7 * 40,
                cy: 478 + Math.floor(t / 7) * 40,
                r: t === 8 ? 8 : 4
            }, t)), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-key`,
                x: `786`,
                y: `404`,
                width: `370`,
                height: `242`,
                rx: `8`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `814`,
                y: `446`,
                children: `RESERVATION`
            }), [
                [`EXPERIMENT`, `SIMPLE PENDULUM`],
                [`SLOT`, `MON · 13:00`],
                [`BENCH`, `PHYSICS · Nº 1`]
            ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `814`,
                    y: 486 + n * 40,
                    children: e
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `990`,
                    y: 486 + n * 40,
                    children: t
                })]
            }, e)), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-hot`,
                x: `814`,
                y: `588`,
                width: `314`,
                height: `40`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `971`,
                y: `613`,
                textAnchor: `middle`,
                children: `CONFIRM`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The reservation screen, redrawn. Labels invented.`
        })]
    })
}

// ==========================================
// VISUAL: xf
// ==========================================
export function xf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 560`,
            role: `img`,
            "aria-label": `Abstraction of a live session: a countdown at the top, a theory checklist that must be completed before the experiment unlocks, and a live instrument pane with measurement inputs.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `440`,
                y: `30`,
                width: `320`,
                height: `56`,
                rx: `8`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `600`,
                y: `53`,
                textAnchor: `middle`,
                children: `SESSION ENDS IN`
            }), (0, $.jsx)(`text`, {
                className: `cv-time`,
                x: `600`,
                y: `78`,
                textAnchor: `middle`,
                children: `00:24:30`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `140`,
                children: `THEORY · GATES THE HARDWARE`
            }), [
                [`PENDULUM DESCRIPTION`, !0],
                [`PENDULUM FORMS`, !0],
                [`MOTION RULES`, !0],
                [`PRACTICAL GUIDE`, !1]
            ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: `cv-node`,
                    x: `44`,
                    y: 158 + n * 62,
                    width: `400`,
                    height: `46`,
                    rx: `5`
                }), (0, $.jsx)(`circle`, {
                    className: t ? `cv-accent-fill` : `cv-device`,
                    cx: `76`,
                    cy: 181 + n * 62,
                    r: `8`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: `100`,
                    y: 186 + n * 62,
                    children: e
                })]
            }, e)), (0, $.jsx)(`rect`, {
                className: `cv-own`,
                x: `44`,
                y: `426`,
                width: `400`,
                height: `46`,
                rx: `5`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `244`,
                y: `454`,
                textAnchor: `middle`,
                children: `GO TO EXPERIMENT · LOCKED UNTIL COMPLETE`
            }), (0, $.jsx)(`rect`, {
                className: `cv-viewport`,
                x: `502`,
                y: `122`,
                width: `654`,
                height: `266`,
                rx: `6`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `502`,
                y1: `158`,
                x2: `1156`,
                y2: `158`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `522`,
                y: `146`,
                children: `LIVE INSTRUMENT · CAMERA`
            }), (0, $.jsxs)(`g`, {
                className: `cv-crosshair`,
                children: [(0, $.jsx)(`line`, {
                    x1: `829`,
                    y1: `216`,
                    x2: `829`,
                    y2: `308`
                }), (0, $.jsx)(`line`, {
                    x1: `783`,
                    y1: `262`,
                    x2: `875`,
                    y2: `262`
                }), (0, $.jsx)(`circle`, {
                    cx: `829`,
                    cy: `262`,
                    r: `30`
                })]
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `502`,
                y: `428`,
                children: `MEASURED PERIODS`
            }), [`T1`, `T2`, `T3`].map((e, t) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: `cv-node`,
                    x: 502 + t * 140,
                    y: `444`,
                    width: `120`,
                    height: `44`,
                    rx: `5`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 522 + t * 140,
                    y: `472`,
                    children: e
                })]
            }, e)), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-hot`,
                x: `942`,
                y: `444`,
                width: `214`,
                height: `44`,
                rx: `5`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `1049`,
                y: `472`,
                textAnchor: `middle`,
                children: `AVERAGE → RESULT`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Theory gates the hardware; the countdown prices the hour.`
        })]
    })
}

// ==========================================
// VISUAL: Sf
// ==========================================
export function Sf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsx)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `Two student personas: a second year who books a slot before preparing for it, and a student repeating the module who competes for whatever hours are left.`,
            children: [{
                name: `NADIA`,
                role: `SECOND YEAR · ON CAMPUS`,
                quote: [`“I booked the pendulum for`, `Thursday. I have not opened`, `the theory yet.”`],
                goal: `PASS THE LAB REQUIREMENT`,
                block: `TREATS THE SLOT AS THE WORK`,
                accent: !0
            }, {
                name: `OMAR`,
                role: `REPEATING THE MODULE`,
                quote: [`“Every free hour is gone by`, `the time I check. I take`, `whatever is left.”`],
                goal: `FINISH BEFORE THE TERM ENDS`,
                block: `COMPETES WITH 200 PEOPLE FOR ONE BENCH`,
                accent: !1
            }].map((e, t) => {
                let n = 30 + t * 590;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: e.accent ? `cv-node cv-node-key` : `cv-node`,
                        x: n,
                        y: `30`,
                        width: `550`,
                        height: `410`,
                        rx: `8`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-label`,
                        x: n + 36,
                        y: `82`,
                        children: e.name
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `110`,
                        children: e.role
                    }), (0, $.jsx)(`line`, {
                        className: `cv-rule`,
                        x1: n + 36,
                        y1: `140`,
                        x2: n + 514,
                        y2: `140`
                    }), e.quote.map((t, r) => (0, $.jsx)(`text`, {
                        className: e.accent ? `cv-body cv-quote-on` : `cv-body`,
                        x: n + 36,
                        y: 190 + r * 32,
                        children: t
                    }, r)), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `322`,
                        children: `GOAL`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: n + 36,
                        y: `348`,
                        children: e.goal
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: n + 36,
                        y: `392`,
                        children: `WHAT GETS IN THE WAY`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-accent`,
                        x: n + 36,
                        y: `418`,
                        children: e.block
                    })]
                }, e.name)
            })
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Two students, one bench. Nadia books before she prepares; Omar cannot get a slot at all. The booking model had to answer both.`
        })]
    })
}

// ==========================================
// VISUAL: Cf
// ==========================================
export function Cf() {
    let e = [{
            label: `PICKS`,
            note: `BROWSES DISCIPLINE`,
            e: 236,
            owned: !0
        }, {
            label: `BOOKS`,
            note: `TAKES A FREE HOUR`,
            e: 200,
            owned: !0
        }, {
            label: `FORGETS`,
            note: `TERM GETS BUSY`,
            e: 300,
            owned: !1
        }, {
            label: `ARRIVES`,
            note: `SLOT STARTS NOW`,
            e: 316,
            owned: !0
        }, {
            label: `STRUGGLES`,
            note: `NO DEMONSTRATOR`,
            e: 336,
            owned: !0
        }, {
            label: `HOUR ENDS`,
            note: `NO USABLE DATA`,
            e: 350,
            owned: !0
        }],
        t = e => 96 + e * 202;
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 520`,
            role: `img`,
            "aria-label": `A student journey from picking an experiment to the end of the booked hour. Confidence drops after booking because preparation is forgotten, and the session ends without usable measurements.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `96`,
                children: `CONFIDENCE`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `116`,
                x2: `1170`,
                y2: `116`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `372`,
                x2: `1170`,
                y2: `372`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: e.map((e, n) => `${t(n)},${e.e}`).join(` `)
            }), e.map((e, n) => (0, $.jsx)(`circle`, {
                className: e.e > 310 ? `cv-dot cv-dot-high` : `cv-dot`,
                cx: t(n),
                cy: e.e,
                r: `5`
            }, e.label)), e.map((e, n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: t(n),
                    y: `410`,
                    textAnchor: `middle`,
                    children: e.label
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: t(n),
                    y: `432`,
                    textAnchor: `middle`,
                    children: e.note
                }), (0, $.jsx)(`rect`, {
                    className: e.owned ? `cv-own cv-own-on` : `cv-own`,
                    x: t(n) - 84,
                    y: `458`,
                    width: `168`,
                    height: `30`,
                    rx: `4`
                })]
            }, e.label))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The gap between booking and arriving is where a session is lost. That is the gap the theory gate closes.`
        })]
    })
}

// ==========================================
// VISUAL: wf
// ==========================================
export function wf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `A timetable grid of four benches across ten hours. Almost every cell is taken; only four are free. The scarcity of slots is what makes booking the core of the product.`,
            children: [
                [`08`, `09`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`].map((e, t) => (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 300 + t * 84,
                    y: `56`,
                    textAnchor: `middle`,
                    children: e
                }, e)), [
                    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ].map((e, t) => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsxs)(`text`, {
                        className: `cv-micro`,
                        x: `30`,
                        y: 106 + t * 74,
                        children: [`BENCH `, t + 1]
                    }), e.map((e, n) => (0, $.jsx)(`rect`, {
                        className: e ? `cv-slot cv-slot-taken` : `cv-slot`,
                        x: 300 + n * 84 - 34,
                        y: 80 + t * 74,
                        width: `68`,
                        height: `44`,
                        rx: `3`
                    }, n))]
                }, t)), (0, $.jsx)(`line`, {
                    className: `cv-rule`,
                    x1: `30`,
                    y1: `392`,
                    x2: `1170`,
                    y2: `392`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-accent`,
                    x: `30`,
                    y: `432`,
                    children: `4 FREE HOURS`
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `170`,
                    y: `432`,
                    children: `OUT OF 40`
                })
            ]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Benches are physical and hours are finite. Grid illustrative.`
        })]
    })
}

// ==========================================
// VISUAL: Tf
// ==========================================
export function Tf() {
    let e = [
        [`BROWSE`, `BY DISCIPLINE`],
        [`THEORY`, `STUDY + GUIDE`],
        [`BOOK`, `PICK A FREE HOUR`],
        [`CONNECT`, `REAL INSTRUMENT`],
        [`MEASURE`, `REAL DATA`]
    ];
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 460`,
            role: `img`,
            "aria-label": `The path to a completed session: browse, theory, book, connect, measure. A second path skips the theory and ends in a wasted slot that nobody can reuse.`,
            children: [e.map(([t, n], r) => {
                let i = 30 + r * 236;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-node`,
                        x: i,
                        y: `112`,
                        width: `206`,
                        height: `82`,
                        rx: `6`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: i + 24,
                        y: `146`,
                        children: t
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: i + 24,
                        y: `170`,
                        children: n
                    }), r < e.length - 1 && (0, $.jsx)(`line`, {
                        className: `cv-link`,
                        x1: i + 206,
                        y1: `153`,
                        x2: i + 236,
                        y2: `153`
                    })]
                }, t)
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `84`,
                children: `PREPARED`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `286`,
                children: `UNPREPARED`
            }), (0, $.jsx)(`path`, {
                className: `cv-link cv-link-accent`,
                d: `M266 194 L 266 314 L 502 314`,
                fill: `none`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node`,
                x: `502`,
                y: `314`,
                width: `206`,
                height: `82`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `526`,
                y: `348`,
                children: `CONNECT`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `526`,
                y: `372`,
                children: `WITHOUT CONTEXT`
            }), (0, $.jsx)(`line`, {
                className: `cv-link cv-link-accent`,
                x1: `708`,
                y1: `355`,
                x2: `738`,
                y2: `355`
            }), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-hot`,
                x: `738`,
                y: `314`,
                width: `206`,
                height: `82`,
                rx: `6`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `762`,
                y: `348`,
                children: `SLOT BURNED`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `762`,
                y: `372`,
                children: `NOBODY CAN REUSE IT`
            })]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `An unprepared session does not just fail for that student. It removes an hour from everyone else.`
        })]
    })
}

// ==========================================
// VISUAL: Ef
// ==========================================
export function Ef() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 690`,
            role: `img`,
            "aria-label": `Abstraction of the machine monitoring screen: a location filter across the top, a rail of machines with status, a live gauge shown against its tolerance band, and a history chart with warning and critical thresholds drawn in.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `666`,
                rx: `10`
            }), [`REGION`, `COUNTRY`, `SITE`, `LINE`, `MACHINE`].map((e, t) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: t === 4 ? `cv-node cv-node-hot` : `cv-node`,
                    x: 44 + t * 176,
                    y: `44`,
                    width: `160`,
                    height: `42`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: t === 4 ? `cv-micro cv-accent` : `cv-micro cv-dim`,
                    x: 124 + t * 176,
                    y: `70`,
                    textAnchor: `middle`,
                    children: e
                })]
            }, e)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `118`,
                x2: `1156`,
                y2: `118`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `152`,
                children: `LINE 04 · 6 ASSETS`
            }), [
                [`UNIT 04`, `NOMINAL`, `ok`],
                [`UNIT 07`, `NOMINAL`, `ok`],
                [`UNIT 11`, `WARNING`, `warn`],
                [`UNIT 12`, `CRITICAL`, `crit`],
                [`UNIT 19`, `NOMINAL`, `ok`],
                [`UNIT 22`, `OFFLINE`, `off`]
            ].map(([e, t, n], r) => {
                let i = 176 + r * 62;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: n === `crit` ? `cv-node cv-node-hot` : `cv-node`,
                        x: `44`,
                        y: i,
                        width: `300`,
                        height: `48`,
                        rx: `5`
                    }), (0, $.jsx)(`circle`, {
                        className: `cv-state cv-state-${n}`,
                        cx: `70`,
                        cy: i + 24,
                        r: `5`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: `92`,
                        y: i + 29,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: n === `crit` ? `cv-micro cv-accent` : `cv-micro cv-dim`,
                        x: `324`,
                        y: i + 29,
                        textAnchor: `end`,
                        children: t
                    })]
                }, e)
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `396`,
                y: `152`,
                children: `VIBRATION · LIVE`
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-track`,
                d: `M420 348 A 110 110 0 0 1 640 348`
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-warn`,
                d: `M544.4 238.9 A 110 110 0 0 1 625.3 293`
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-crit`,
                d: `M625.3 293 A 110 110 0 0 1 640 348`
            }), (0, $.jsx)(`path`, {
                className: `cv-gauge-value`,
                d: `M420 348 A 110 110 0 0 1 566.7 244.3`
            }), (0, $.jsx)(`text`, {
                className: `cv-figure`,
                x: `530`,
                y: `330`,
                textAnchor: `middle`,
                children: `7.3`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `530`,
                y: `356`,
                textAnchor: `middle`,
                children: `mm/s`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `414`,
                y: `376`,
                children: `0`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `632`,
                y: `376`,
                children: `12`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `716`,
                y: `152`,
                children: `LAST 12 HOURS`
            }), (0, $.jsx)(`line`, {
                className: `cv-threshold-crit`,
                x1: `716`,
                y1: `196`,
                x2: `1156`,
                y2: `196`
            }), (0, $.jsx)(`line`, {
                className: `cv-threshold-warn`,
                x1: `716`,
                y1: `244`,
                x2: `1156`,
                y2: `244`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `716`,
                y1: `356`,
                x2: `1156`,
                y2: `356`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: [22, 30, 26, 38, 34, 46, 52, 44, 58, 66, 60, 72].map((e, t) => `${716+t*40},${356-e*1.9}`).join(` `)
            }), (0, $.jsx)(`circle`, {
                className: `cv-dot cv-dot-high`,
                cx: 1156,
                cy: 356 - 72 * 1.9,
                r: `5`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `396`,
                y1: `428`,
                x2: `1156`,
                y2: `428`
            }), [`THERMAL`, `VIBRATION`, `ENERGY`].map((e, t) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: t === 1 ? `cv-node cv-node-hot` : `cv-node`,
                    x: 396 + t * 258,
                    y: `452`,
                    width: `242`,
                    height: `52`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: t === 1 ? `cv-micro cv-accent` : `cv-micro cv-dim`,
                    x: 517 + t * 258,
                    y: `483`,
                    textAnchor: `middle`,
                    children: e
                })]
            }, e)), (0, $.jsx)(`rect`, {
                className: `cv-node cv-node-key`,
                x: `44`,
                y: `558`,
                width: `1112`,
                height: `76`,
                rx: `6`
            }), [
                [`LINE`, `IP 04`],
                [`TEAM LEADER`, `A. BENALI`],
                [`SHIFT`, `MORNING`],
                [`UPDATED`, `11:42`]
            ].map(([e, t], n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 80 + n * 278,
                    y: `588`,
                    children: e
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: 80 + n * 278,
                    y: `614`,
                    children: t
                })]
            }, e))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The monitoring screen, redrawn. All labels invented.`
        })]
    })
}

// ==========================================
// VISUAL: Df
// ==========================================
export function Df() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 512`,
            role: `img`,
            "aria-label": `Stakeholder map of four roles — operator, team leader, plant manager and regional director — each with the question they bring to the same screen, their constraint, and how far ahead they are looking.`,
            children: [
                [{
                    role: `OPERATOR`,
                    at: `AT THE MACHINE`,
                    needs: `Is this one machine`,
                    needs2: `behaving right now?`,
                    pain: [`CANNOT STOP TO READ`, `A TABLE`]
                }, {
                    role: `TEAM LEADER`,
                    at: `ON THE LINE`,
                    needs: `Which asset on my line`,
                    needs2: `will stop my shift?`,
                    pain: [`OWNS THE OUTCOME,`, `NOT THE DATA`]
                }, {
                    role: `PLANT MANAGER`,
                    at: `IN THE SITE`,
                    needs: `Which line is dragging`,
                    needs2: `the plant this week?`,
                    pain: [`COMPARES LINES THAT`, `ARE NOT ALIKE`]
                }, {
                    role: `REGIONAL DIRECTOR`,
                    at: `ACROSS EMEA`,
                    needs: `Which site is the`,
                    needs2: `outlier this quarter?`,
                    pain: [`NEEDS ONE NUMBER`, `THAT COMPARES`]
                }].map((e, t) => {
                    let n = 30 + t * 292;
                    return (0, $.jsxs)(`g`, {
                        children: [(0, $.jsx)(`rect`, {
                            className: `cv-node`,
                            x: n,
                            y: `30`,
                            width: `262`,
                            height: `330`,
                            rx: `6`
                        }), (0, $.jsx)(`text`, {
                            className: `cv-micro`,
                            x: n + 26,
                            y: `72`,
                            children: e.role
                        }), (0, $.jsx)(`text`, {
                            className: `cv-micro cv-dim`,
                            x: n + 26,
                            y: `96`,
                            children: e.at
                        }), (0, $.jsx)(`line`, {
                            className: `cv-rule`,
                            x1: n + 26,
                            y1: `122`,
                            x2: n + 236,
                            y2: `122`
                        }), (0, $.jsx)(`text`, {
                            className: `cv-micro cv-accent`,
                            x: n + 26,
                            y: `158`,
                            children: `ASKS`
                        }), (0, $.jsx)(`text`, {
                            className: `cv-body`,
                            x: n + 26,
                            y: `192`,
                            children: e.needs
                        }), (0, $.jsx)(`text`, {
                            className: `cv-body`,
                            x: n + 26,
                            y: `218`,
                            children: e.needs2
                        }), (0, $.jsx)(`text`, {
                            className: `cv-micro cv-dim`,
                            x: n + 26,
                            y: `272`,
                            children: `CONSTRAINT`
                        }), e.pain.map((e, t) => (0, $.jsx)(`text`, {
                            className: `cv-micro`,
                            x: n + 26,
                            y: 302 + t * 24,
                            children: e
                        }, t))]
                    }, e.role)
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: `30`,
                    y: `418`,
                    children: `HOW FAR AHEAD THEY LOOK`
                }), [`SECONDS`, `A SHIFT`, `A WEEK`, `A QUARTER`].map((e, t) => (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`rect`, {
                        className: `cv-span`,
                        x: 30 + t * 292,
                        y: `438`,
                        width: 70 + t * 62,
                        height: `26`,
                        rx: `3`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: 30 + t * 292,
                        y: `492`,
                        children: e
                    })]
                }, e))
            ]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Four roles, four different questions, one screen.`
        })]
    })
}

// ==========================================
// VISUAL: Of
// ==========================================
export function Of() {
    let e = [{
            label: `HANDOVER IN`,
            note: `WHAT BROKE LAST SHIFT`,
            e: 250,
            owned: !0
        }, {
            label: `WALK THE LINE`,
            note: `EYES AND EARS`,
            e: 210,
            owned: !1
        }, {
            label: `ALERT`,
            note: `THRESHOLD CROSSED`,
            e: 292,
            owned: !0
        }, {
            label: `DIAGNOSE`,
            note: `HISTORY, NOT SNAPSHOT`,
            e: 232,
            owned: !0
        }, {
            label: `ACT`,
            note: `FIX OR ESCALATE`,
            e: 186,
            owned: !0
        }, {
            label: `HANDOVER OUT`,
            note: `PASS ON CONTEXT`,
            e: 156,
            owned: !0
        }],
        t = e => 96 + e * 202;
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 520`,
            role: `img`,
            "aria-label": `A team leader's shift in six steps, with a confidence curve and a band showing which steps the product supports. Walking the line stays a human judgement.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `96`,
                children: `CONFIDENCE`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `116`,
                x2: `1170`,
                y2: `116`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `312`,
                x2: `1170`,
                y2: `312`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: e.map((e, n) => `${t(n)},${e.e}`).join(` `)
            }), e.map((e, n) => (0, $.jsx)(`circle`, {
                className: e.e < 200 ? `cv-dot cv-dot-high` : `cv-dot`,
                cx: t(n),
                cy: e.e,
                r: `5`
            }, e.label)), e.map((e, n) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`text`, {
                    className: `cv-micro`,
                    x: t(n),
                    y: `350`,
                    textAnchor: `middle`,
                    children: e.label
                }), (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: t(n),
                    y: `372`,
                    textAnchor: `middle`,
                    children: e.note
                }), (0, $.jsx)(`rect`, {
                    className: e.owned ? `cv-own cv-own-on` : `cv-own`,
                    x: t(n) - 84,
                    y: `404`,
                    width: `168`,
                    height: `32`,
                    rx: `4`
                })]
            }, e.label))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `A shift, end to end. Handover was the step that surprised me: context dies between shifts unless the system carries it, which is why line, leader and shift stay pinned to every reading.`
        })]
    })
}

// ==========================================
// VISUAL: kf
// ==========================================
export function kf() {
    let e = [{
        label: `REGION`,
        ex: `EMEA`,
        who: `REGIONAL DIRECTOR`,
        n: 1
    }, {
        label: `COUNTRY`,
        ex: `PER MARKET`,
        who: `COUNTRY LEAD`,
        n: 3
    }, {
        label: `SITE`,
        ex: `PLANT`,
        who: `PLANT MANAGER`,
        n: 5
    }, {
        label: `LINE`,
        ex: `WIRING LINE`,
        who: `TEAM LEADER`,
        n: 8
    }, {
        label: `MACHINE`,
        ex: `SINGLE ASSET`,
        who: `OPERATOR`,
        n: 13
    }];
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsx)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `Diagram of five levels of hierarchy — region, country, site, line and machine — each with the role that reads it, all served by one shared component set.`,
            children: e.map((t, n) => {
                let r = 30 + n * 84;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`text`, {
                        className: `cv-micro`,
                        x: `30`,
                        y: r + 30,
                        children: t.label
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: `30`,
                        y: r + 52,
                        children: t.ex
                    }), Array.from({
                        length: t.n
                    }).map((e, t) => (0, $.jsx)(`rect`, {
                        className: n === 3 ? `cv-unit cv-unit-on` : `cv-unit`,
                        x: 280 + t * 40,
                        y: r + 14,
                        width: `28`,
                        height: `34`,
                        rx: `3`
                    }, t)), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: `1170`,
                        y: r + 36,
                        textAnchor: `end`,
                        children: t.who
                    }), n < e.length - 1 && (0, $.jsx)(`line`, {
                        className: `cv-rule`,
                        x1: `30`,
                        y1: r + 70,
                        x2: `1170`,
                        y2: r + 70
                    })]
                }, t.label)
            })
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The levels follow from the footprint.`
        })]
    })
}

// ==========================================
// VISUAL: Af
// ==========================================
export function Af() {
    let e = [3.1, 4.2, 3.6, 5.1, 4.4, 6.2, 5, 7.8, 6.1, 9.4, 7.2, 11.6, 8.4, 6.9, 5.2, 4.1],
        t = e => 240 + e * 52,
        n = e => 300 - e * 18;
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 500`,
            role: `img`,
            "aria-label": `A vibration trace crossing two thresholds. Readings within tolerance stay on the dashboard, a warning threshold notifies the team leader, and a critical threshold raises a maintenance alert.`,
            children: [(0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `60`,
                children: `VIBRATION`
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `30`,
                y: `82`,
                children: `mm/s`
            }), (0, $.jsx)(`line`, {
                className: `cv-threshold-crit`,
                x1: `240`,
                y1: n(10),
                x2: `1080`,
                y2: n(10)
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-accent`,
                x: `1092`,
                y: n(10) + 5,
                children: `CRITICAL`
            }), (0, $.jsx)(`line`, {
                className: `cv-threshold-warn`,
                x1: `240`,
                y1: n(6.5),
                x2: `1080`,
                y2: n(6.5)
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `1092`,
                y: n(6.5) + 5,
                children: `WARNING`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `240`,
                y1: `300`,
                x2: `1080`,
                y2: `300`
            }), (0, $.jsx)(`polyline`, {
                className: `cv-curve`,
                points: e.map((e, r) => `${t(r)},${n(e)}`).join(` `)
            }), e.map((e, r) => e < 6.5 ? null : (0, $.jsx)(`circle`, {
                className: e >= 10 ? `cv-dot cv-dot-high` : `cv-dot`,
                cx: t(r),
                cy: n(e),
                r: `4.5`
            }, r)), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `30`,
                y1: `348`,
                x2: `1170`,
                y2: `348`
            }), [{
                title: `WITHIN TOLERANCE`,
                body: [`STAYS ON THE DASHBOARD.`, `NO INTERRUPTION.`]
            }, {
                title: `WARNING`,
                body: [`SURFACED TO THE TEAM`, `LEADER ON SHIFT.`]
            }, {
                title: `CRITICAL`,
                body: [`MAINTENANCE ALERTED.`, `FLAGGED ON THE LINE VIEW.`],
                hot: !0
            }].map(({
                title: e,
                body: t,
                hot: n
            }, r) => (0, $.jsxs)(`g`, {
                children: [(0, $.jsx)(`rect`, {
                    className: n ? `cv-node cv-node-hot` : `cv-node`,
                    x: 30 + r * 390,
                    y: `374`,
                    width: `350`,
                    height: `92`,
                    rx: `6`
                }), (0, $.jsx)(`text`, {
                    className: n ? `cv-micro cv-accent` : `cv-micro`,
                    x: 54 + r * 390,
                    y: `404`,
                    children: e
                }), t.map((e, t) => (0, $.jsx)(`text`, {
                    className: `cv-micro cv-dim`,
                    x: 54 + r * 390,
                    y: 430 + t * 22,
                    children: e
                }, t))]
            }, e))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Vibration against its tolerance band. Values invented.`
        })]
    })
}

// ==========================================
// VISUAL: jf
// ==========================================
export function jf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv`,
        children: [(0, $.jsxs)(`svg`, {
            className: `cv-svg`,
            viewBox: `0 0 1200 470`,
            role: `img`,
            "aria-label": `Abstraction of the monitoring dashboard: four key metric tiles above a regional bar chart and a per-unit uptime strip.`,
            children: [(0, $.jsx)(`rect`, {
                className: `cv-frame`,
                x: `12`,
                y: `12`,
                width: `1176`,
                height: `446`,
                rx: `10`
            }), [
                [`CONSULTATIONS`, `96,240`],
                [`TELECONSULTS`, `12,110`],
                [`SCREENINGS`, `17,800`],
                [`UPTIME`, `99.2%`]
            ].map(([e, t], n) => {
                let r = 44 + n * 282;
                return (0, $.jsxs)(`g`, {
                    children: [(0, $.jsx)(`line`, {
                        className: `cv-rule`,
                        x1: r,
                        y1: `56`,
                        x2: r + 254,
                        y2: `56`
                    }), (0, $.jsx)(`text`, {
                        className: `cv-micro cv-dim`,
                        x: r,
                        y: `80`,
                        children: e
                    }), (0, $.jsx)(`text`, {
                        className: n === 3 ? `cv-figure cv-accent` : `cv-figure`,
                        x: r,
                        y: `126`,
                        children: t
                    })]
                }, e)
            }), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `44`,
                y: `188`,
                children: `CONSULTATIONS BY REGION`
            }), (0, $.jsx)(`line`, {
                className: `cv-rule`,
                x1: `44`,
                y1: `356`,
                x2: `800`,
                y2: `356`
            }), [62, 88, 44, 96, 70, 52, 80, 36, 74, 58, 90, 48].map((e, t) => (0, $.jsx)(`rect`, {
                className: e > 90 ? `cv-bar cv-bar-peak` : `cv-bar`,
                x: 48 + t * 62,
                y: 356 - e * 1.5,
                width: `38`,
                height: e * 1.5,
                rx: `2`
            }, t)), (0, $.jsx)(`text`, {
                className: `cv-micro cv-dim`,
                x: `852`,
                y: `188`,
                children: `UNIT STATUS · 100`
            }), Array.from({
                length: 40
            }).map((e, t) => (0, $.jsx)(`rect`, {
                className: t === 17 || t === 31 ? `cv-cell cv-cell-flag` : `cv-cell`,
                x: 852 + t % 8 * 38,
                y: 210 + Math.floor(t / 8) * 30,
                width: `28`,
                height: `20`,
                rx: `2`
            }, t))]
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `The ministry-facing dashboard.`
        })]
    })
}

// ==========================================
// VISUAL: Pf
// ==========================================
export function Pf() {
    return (0, $.jsxs)(`figure`, {
        className: `cv cv-photo cv-photo-narrow`,
        children: [(0, $.jsx)(`img`, {
            src: `/th/personas.webp`,
            alt: `Two hand-drawn persona sheets: Meryem, 24, a patient in Casablanca, and Ahmed, 31, a nurse in Rabat, each with bio, pain points, motivations and goals.`,
            loading: `lazy`,
            decoding: `async`
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Drawn on paper before any interface existed: a patient who cannot spare a day waiting, and a nurse who wants to take weekend cases.`
        })]
    })
}

// ==========================================
// VISUAL: Ff
// ==========================================
export function Ff() {
    return (0, $.jsxs)(`figure`, {
        className: `cv cv-photo`,
        children: [(0, $.jsx)(`img`, {
            src: `/th/storyboard.webp`,
            alt: `A hand-drawn twelve-panel storyboard following a patient from arrival at the unit through nurse intake, the remote specialist consultation, the doctor reviewing the record, and the prescription.`,
            loading: `lazy`,
            decoding: `async`
        }), (0, $.jsx)(`figcaption`, {
            className: `cv-caption`,
            children: `Twelve panels from arrival to prescription, drawn before a single wireframe. Fixing the sequence on paper meant the screens only had to serve a flow the team had already agreed on.`
        })]
    })
}

// ==========================================
// VISUAL: If
// ==========================================
export function If() {
    return (0, $.jsxs)(`section`, {
        className: `cs-block container ig`,
        children: [(0, $.jsx)(`h2`, {
            className: `label cs-reveal`,
            children: `The interface`
        }), (0, $.jsxs)(`div`, {
            children: [(0, $.jsx)(`p`, {
                className: `ig-intro cs-reveal`,
                children: `The shipped visual design. Data shown is illustrative.`
            }), (0, $.jsx)(`ul`, {
                className: `ig-grid`,
                children: Mf.map(e => (0, $.jsxs)(`li`, {
                    className: `ig-item ig-${e.span??`half`} cs-reveal`,
                    children: [(0, $.jsx)(`img`, {
                        src: e.src,
                        alt: e.alt,
                        loading: `lazy`,
                        decoding: `async`
                    }), (0, $.jsx)(`p`, {
                        className: `ig-caption`,
                        children: e.caption
                    })]
                }, e.src))
            }), (0, $.jsx)(`h3`, {
                className: `ig-subhead label cs-reveal`,
                children: `Components`
            }), (0, $.jsx)(`ul`, {
                className: `ig-components`,
                children: Nf.map(e => (0, $.jsxs)(`li`, {
                    className: `ig-component cs-reveal`,
                    children: [(0, $.jsx)(`div`, {
                        className: `ig-slot`,
                        children: (0, $.jsx)(`img`, {
                            src: e.src,
                            alt: e.alt,
                            loading: `lazy`,
                            decoding: `async`
                        })
                    }), (0, $.jsx)(`p`, {
                        className: `ig-caption`,
                        children: e.caption
                    })]
                }, e.src))
            })]
        })]
    })
}

// ==========================================
// VISUAL: Rf
// ==========================================
export function Rf({
    groups: e
}) {
    return e?.length ? e.map((e, t) => (0, $.jsxs)(`section`, {
        "aria-label": e.label,
        children: [(0, $.jsx)(`div`, {
            className: `cs-figures-label container cs-reveal`,
            children: (0, $.jsx)(`h2`, {
                className: `label`,
                children: e.label
            })
        }), e.items.map((e, t) => (0, $.jsx)(`div`, {
            className: `cs-visual container cs-reveal`,
            children: (0, $.jsx)(e, {})
        }, t))]
    }, t)) : null
}


export const Lf = {
    telehealth: {
        hero: af,
        afterProblem: [
            { label: 'Research', items: [Pf, cf, lf] },
            { label: 'The system', items: [of] }
        ],
        afterWork: [
            { label: 'The dashboard', items: [jf] }
        ],
        afterProcess: [
            { label: 'The storyboard', items: [Ff] },
            { label: 'The consultation flow', items: [sf] }
        ],
        afterDecisions: [
            { label: 'One system, three products', items: [uf] }
        ]
    },
    "remote-laboratory": {
        hero: bf,
        afterProblem: [
            { label: 'The timetable', items: [wf] },
            { label: 'The students', items: [Sf, Cf] }
        ],
        afterWork: [
            { label: 'The session flow', items: [Tf] }
        ],
        afterProcess: [
            { label: 'Inside a session', items: [xf] }
        ]
    },
    "ev-cluster": {
        hero: yf
    },
    "energy-platform": {
        hero: df,
        afterProblem: [
            { label: 'The tariff', items: [ff] },
            { label: 'Research', items: [pf, mf, _f] }
        ],
        afterWork: [
            { label: 'The flow', items: [hf] }
        ],
        afterProcess: [
            { label: 'Explorations', items: [gf, vf] }
        ],
        gallery: true
    },
    "industrial-monitoring": {
        hero: Ef,
        afterProblem: [
            { label: 'Who reads it', items: [Df, Of] },
            { label: 'The hierarchy', items: [kf] }
        ],
        afterWork: [
            { label: 'From reading to action', items: [Af] }
        ]
    }
};
