import { CropPortfolio } from "./types";

export const initialCropPortfolios: CropPortfolio[] = [
  {
    id: "maize-alpha",
    name: "Maize Alpha",
    lastScan: "2h ago",
    status: "Healthy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPM5FUbYJekt9TD8bqwPtsgDl_47MJIPWtWApw_1qB3pq9jeQ1w781H-deTvEheM4wV_wtKx3Rn6KZc8qxc3wlFEvW7ifTUrZyQ21kLNSJQsuXXt7YOOj4e1grbOkl3kwXdOXfVJYSoWX9W4L4CFaTJDDjB0eCNzjmN50TjnQsIuHKI3Yh8IGIN4LR9cKaJ8KebLuvm-A5ruAsRwtAOPgtyHaub62hio7o-zz6RlMqXPx-tg47s4CKs4negX65IJ-xe0ZWoA1F-Ze",
    healthScore: 88,
    moisture: 62,
    estYield: "4.2t",
    growthStage: "Tasseling",
    scienceName: "Zea mays",
    statsHistory: [
      { date: "May 28", health: 80, moisture: 58 },
      { date: "Jun 01", health: 84, moisture: 60 },
      { date: "Jun 06", health: 88, moisture: 62 }
    ],
    activities: [
      {
        id: "act-1",
        type: "warning",
        title: "Fall Armyworm detected",
        time: "2 days ago",
        description: "Active infestation found in North Sector. Immediate localized treatment recommended to prevent spread.",
        analysisLink: true
      },
      {
        id: "act-2",
        type: "success",
        title: "Nitrogen levels optimal",
        time: "5 days ago",
        description: "Soil nutrient scan shows stable levels across Central Sector. No additional fertilizing required."
      }
    ],
    scanHistory: [
      {
        id: "hist-pre-1",
        date: "2 days ago",
        cropName: "Maize Alpha",
        pestOrDisease: "Fall Armyworm (Spodoptera frugiperda)",
        healthStatus: "Warning",
        severity: "Medium",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPM5FUbYJekt9TD8bqwPtsgDl_47MJIPWtWApw_1qB3pq9jeQ1w781H-deTvEheM4wV_wtKx3Rn6KZc8qxc3wlFEvW7ifTUrZyQ21kLNSJQsuXXt7YOOj4e1grbOkl3kwXdOXfVJYSoWX9W4L4CFaTJDDjB0eCNzjmN50TjnQsIuHKI3Yh8IGIN4LR9cKaJ8KebLuvm-A5ruAsRwtAOPgtyHaub62hio7o-zz6RlMqXPx-tg47s4CKs4negX65IJ-xe0ZWoA1F-Ze",
        description: "Active fall armyworm feeding lesions observed on the whorl leaves of the target sweet maize spec.",
        solutions: ["Apply biological control agent e.g. Bacillus thuringiensis (Bt)", "Introduce natural predators like parasitic wasps", "Intercrop with insect-repelling plants"],
        botanicalName: "Zea mays",
        plantFamily: "Poaceae",
        confidence: "92%",
        healthScore: 88,
        aboutPlant: "Maize, also known as corn, is a staple cereal grain from the grass family Poaceae.",
        pruningTips: ["Remove lower dead leaf foliage.", "Clear weeds from stem-base."],
        careTips: ["Irrigate soil deeply.", "Apply organic nitrogen fertilizer."]
      }
    ]
  },
  {
    id: "cherry-tomatoes",
    name: "Cherry Tomatoes",
    lastScan: "Yesterday",
    status: "Pest Risk",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA35G5LB6ZutbJifOdd6SYrUULXziKOXb0WFSwoSHPJnRUX0cpk-ujPr29hxqAAZdUrTBi1LCAHlsuEG-L-VdLnGV24Oox1SaIHyzO1kE0Wh-GB98iPqv5ErvAOipgdpK8grCQRZgBsKkCfOXL1s0_dv5PNGzZFwgjO6A1dn3do7sT1D_nIYva-pdgjAeF8aEnZr6lNr3uwvXaNuy6kAsGuM2AnrydriJXD3JKV27Nhc9EMZoErKXTUoYvWPtaxHBAmBJ6Fpkk5KMYi",
    healthScore: 74,
    moisture: 55,
    estYield: "1.8t",
    growthStage: "Vegetative",
    scienceName: "Solanum lycopersicum",
    statsHistory: [
      { date: "May 28", health: 78, moisture: 50 },
      { date: "Jun 01", health: 76, moisture: 53 },
      { date: "Jun 06", health: 74, moisture: 55 }
    ],
    activities: [
      {
        id: "act-3",
        type: "alert",
        title: "Spider mite risk elevated",
        time: "Yesterday",
        description: "Humidity levels dropped past 45% trigger. High potential for spider mite propagation in East Greenhouse.",
        analysisLink: true
      }
    ],
    scanHistory: [
      {
        id: "hist-pre-2",
        date: "Yesterday",
        cropName: "Cherry Tomatoes",
        pestOrDisease: "Spider Mite Infestation (Tetranychidae)",
        healthStatus: "Pest Risk",
        severity: "Low",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA35G5LB6ZutbJifOdd6SYrUULXziKOXb0WFSwoSHPJnRUX0cpk-ujPr29hxqAAZdUrTBi1LCAHlsuEG-L-VdLnGV24Oox1SaIHyzO1kE0Wh-GB98iPqv5ErvAOipgdpK8grCQRZgBsKkCfOXL1s0_dv5PNGzZFwgjO6A1dn3do7sT1D_nIYva-pdgjAeF8aEnZr6lNr3uwvXaNuy6kAsGuM2AnrydriJXD3JKV27Nhc9EMZoErKXTUoYvWPtaxHBAmBJ6Fpkk5KMYi",
        description: "Unstable humidity trigger has elevated spider mite presence. Delicate webbing seen on lower petioles.",
        solutions: ["Spray with horticultural insecticidal soap on undersides of leaves", "Maintain greenhouse relative humidity above 60%", "Isolate symptomatic planters to prevent localized migration"],
        botanicalName: "Solanum lycopersicum",
        plantFamily: "Solanaceae",
        confidence: "87%",
        healthScore: 74,
        aboutPlant: "Tomatoes are popular annual plants from the Solanaceae family grown for their edible fruit.",
        pruningTips: ["Pinch early vertical suckers.", "Clear foliage below first Y-junction."],
        careTips: ["Irrigate base directly.", "Ensure solid stakes/trellis support."]
      }
    ]
  },
  {
    id: "winter-wheat",
    name: "Winter Wheat",
    lastScan: "3d ago",
    status: "Ready",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO_uWvzNStS8l5Lrptf2rO0TUFHKGF3l0jQLo7zD_wuMuUpBbmBkmmLH2KsajXrIfBfszL2PYcrurwkTzYfbQLepnvmiuvMUK8rM8cr4vM6CxV85Oob4FxrdOComrZNcHrTv0FmzPTABcskiUJm3KWE_xEoV-uPxPmJ_ek6WRPoTQwTMsh3xwU-naw_DHkCd2pVJv97ABlVxZNPozYi1rxOY8wM7diAF3JE_J1N07wnSuDypvcRYIEBxtCUzZwXEmRpQ2MJgV7SIUL",
    healthScore: 92,
    moisture: 48,
    estYield: "5.5t",
    growthStage: "Maturity",
    scienceName: "Triticum aestivum",
    statsHistory: [
      { date: "May 28", health: 90, moisture: 52 },
      { date: "Jun 01", health: 91, moisture: 50 },
      { date: "Jun 06", health: 92, moisture: 48 }
    ],
    activities: [
      {
        id: "act-4",
        type: "success",
        title: "Grain quality verified",
        time: "3 days ago",
        description: "Pre-harvest kernel analysis demonstrates premium moisture content and high protein value."
      }
    ]
  },
  {
    id: "soybean-plot-b",
    name: "Soybean Plot B",
    lastScan: "5h ago",
    status: "Healthy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4pHTDk1hg4C58vaRhvcJSv-DKDLXWCS9L7ybmEphgLQwBS9JneGSgCeOhdytjomC_uMbRtJqhNLlqqSlzko5afpitQwnOZbIl9OHxLb3WQr7c0Sevrg1CFMq6avj9NLZx7429QW3hGuc15HpVHrUfKkLiXbvv3qSZCaPeSI5OEn7wP6f6cjIWUEoeTHPDQQryvdgXap_VWwuZc9D9wUjez32pynbB12O3nTqbjtz2r4nfPNh37ntkMcuHKUMS62zykVYkSZIIAT_q",
    healthScore: 90,
    moisture: 60,
    estYield: "3.1t",
    growthStage: "Vegetative",
    scienceName: "Glycine max",
    statsHistory: [
      { date: "May 28", health: 88, moisture: 59 },
      { date: "Jun 01", health: 90, moisture: 60 }
    ],
    activities: [
      {
        id: "act-5",
        type: "success",
        title: "Nodule count high",
        time: "5 hours ago",
        description: "Excellent biological nitrogen fixation detected in root samples from row 12."
      }
    ]
  },
  {
    id: "vineyard-north",
    name: "Vineyard North",
    lastScan: "1w ago",
    status: "Warning",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZN6OL7HmjzjB_TGzBGvxh6XqqHa1SCXbdEXwvuTjmsH6atRLU_fduYNgfg9keoraZe3YFh8qK8t3FN45vxKJhtHoDlIGdnIq0zV7Bo3SVT9Uzx6MTcEL3_-XGN8i_baKynPQOkkll-8Y2p-nf8YIpv8mNqvQcfX7p_dRPS7xJIUZj-0pdVPz_sfNRMnsY4DUBLNicfUdvDZEnzTztoiYNENocyVcDiz3U2F7mtqvMAfDvlUelRxYnz-L4Pv4XD52JvCsi_Qui5ofx",
    healthScore: 68,
    moisture: 40,
    estYield: "8.4t",
    growthStage: "Grain Fill",
    scienceName: "Vitis vinifera",
    statsHistory: [
      { date: "May 28", health: 72, moisture: 45 },
      { date: "Jun 01", health: 68, moisture: 40 }
    ],
    activities: [
      {
        id: "act-6",
        type: "warning",
        title: "Water stress detected",
        time: "1 week ago",
        description: "Soil moisture dropped to 40%. Scheduled drip line activation should be advanced to mitigate wilting risk.",
        analysisLink: true
      }
    ]
  },
  {
    id: "russet-pot",
    name: "Russet Pot.",
    lastScan: "12h ago",
    status: "Infected",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI3McbJA_Jxbm0KNH9c0_OHWkzVZwAbela8eV3yKjBAl9gQ4_91h7i3GReL9nbIJxaqlkDZfqd_x5iEnt6Lx1r_SnMbVLx9Ckdla8rvzHmEz0-guGI8Iuy7k9m3TYaNO-BEbWxMbDUl7bTGDxjHEvuTJYCrqyzjBDDGX-_P5BRDnlTXKCjw6IuHELOprc0lBKmFtYbcfc99F-0DEvtUWsK__1yJFVKvQVfZVkOhv138G2AiemSEoJ2xOKA-G8zDwLrmjuP16uV66I1",
    healthScore: 45,
    moisture: 65,
    estYield: "4.0t",
    growthStage: "Vegetative",
    scienceName: "Solanum tuberosum",
    statsHistory: [
      { date: "May 28", health: 50, moisture: 60 },
      { date: "Jun 01", health: 45, moisture: 65 }
    ],
    activities: [
      {
        id: "act-7",
        type: "alert",
        title: "Early Blight infestation",
        time: "12 hours ago",
        description: "Blight spots detected on lower leaf canopies in the Northwestern Ridge sector.",
        analysisLink: true
      }
    ],
    scanHistory: [
      {
        id: "hist-pre-3",
        date: "12 hours ago",
        cropName: "Russet Pot.",
        pestOrDisease: "Early Blight Blistering (Alternaria solani)",
        healthStatus: "Infected",
        severity: "High",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI3McbJA_Jxbm0KNH9c0_OHWkzVZwAbela8eV3yKjBAl9gQ4_91h7i3GReL9nbIJxaqlkDZfqd_x5iEnt6Lx1r_SnMbVLx9Ckdla8rvzHmEz0-guGI8Iuy7k9m3TYaNO-BEbWxMbDUl7bTGDxjHEvuTJYCrqyzjBDDGX-_P5BRDnlTXKCjw6IuHELOprc0lBKmFtYbcfc99F-0DEvtUWsK__1yJFVKvQVfZVkOhv138G2AiemSEoJ2xOKA-G8zDwLrmjuP16uV66I1",
        description: "Concentric brown circles leaf spots with chlorotic ring margins identified on standard russet canopy potato templates.",
        solutions: ["Apply defensive copper-based soap solutions", "Irrigate plants at ground level rather than using overhead sprinklers", "Clear infected leaves completely and incinerate in safe ash piles"],
        botanicalName: "Solanum tuberosum",
        plantFamily: "Solanaceae",
        confidence: "89%",
        healthScore: 45,
        aboutPlant: "Potatoes belong to the Solanaceae family and produce starchy underground tubers.",
        pruningTips: ["Thin out yellowed lower stems.", "Clear crowding ground branches."],
        careTips: ["Limit soil moisture swings.", "Add high potassium root minerals."]
      }
    ]
  }
];
