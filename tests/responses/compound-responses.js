export default {
  xss_attack: {
    data: {
      title: 'Boron',
      page_type: 'dangerous',
      metadata: [
        {
          title: 'contributors',
          text: 'Matt Landsman, Lauren Nalley',
        },
      ],
      documentation: {
        sections: [
          {
            title: 'Internal publications',
            text: 'DANGEROUS MARKDOWN<script>alert(\'hahahahahah\')</script>',
          },
        ],
      },
    },
  },
  boron: {
    data: {
      title: 'Boron',
      page_type: 'compound',
      metadata: [
        {
          title: 'produced_water_relevance',
          text: 'Toxicity (319)',
        },
        {
          title: 'origin',
          text: 'Presence in geologic formations (196)',
        },
        {
          title: 'fundamental_relevance',
          text: 'Uncharged at neutral pH (196)',
        },
      ],
      documentation: {
        sections: [
          {
            title: 'Relevance to M-WET:',
            text: '- Naturally occurring in the environment\n\t - Seawater concentration around 5 mg/L [[1]](#1)\n - Toxicity\n\t - boron has an extremely narrow concentration range between deficiency and toxicity in some plants [[2]](#2) and it has been shown to suppress plant growth [[3]](#3) and immune response in several crops [[4]](#4) .\n - Small, neutral solute\n\t - Boric acid is a small solute, with an estimated Stokes radius of 1.6 Å [[5]](#5) , compared to 1.8 Å and 1.2 Å for sodium and chloride, respectively [[6]](#6) .\n\t - The Stokes radius of borate has been estimated as 2.6 Å [[7]](#7) .',
          },
          {
            title: 'Physiochemical properties:',
            text: '- Aqueous species include neutral boric acid, negatively-charged borate, and other species in complex waters\n\t - The acid dissociation constant, pK a , for boric acid is\n\t   approximately 9.2 in dilute systems, yet the apparent dissociation constant varies as a function of salinity, temperature, and pressure [[8–11]](#8). \n\t - Polyborates [[12](#12),[13](#13)]\n\t - Borate-salt complexes [[8](#8),[10](#10),[14](#14)]\n\t - Organic esters [[15](#15),[16](#16)]',
          },
          {
            title: 'Analysis',
            text: '- ICP-OES (matt presentation)\n - NEXAFS [[17](#17),[18](#18)]\n - NMR\n - FTIR [[19]](#19)',
          },
          {
            title: 'Internal publications',
            text: ' - Landsman, Lawler, Katz (2020). Application of electrodialysis pretreatment to enhance boron removal and reduce fouling during nanofiltration/reverse osmosis',
          },
        ],
      },
    },
  },
};
