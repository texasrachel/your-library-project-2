[TOC]



# Code

  if (!bird) return <h3>Loading...</h3>

# Components

## useState, useEffect

```react
import { useState, useEffect } from "react";

import api from "../api/";

const getCatalog = () => {	
  // creates State: object w/ two properties
const [airtableData, setData] = useState({
    userSearch: "", // search term
    response: [], // of api
  });
  
  // executed whenever userSearch changes
  // useEffect means API request happens with every new character
  // timeout? or onClick?
  useEffect(() => {
    // axios await request
  	// const catalog = async ...
  }, [airtableData.usersearch]);

  // ...
  return { airtableData, setData}
};

export default getCatalog;
```



## button to filter:

```react
// filter.jsx
import React, { useState } from "react";import "./filter.css";

default function Filter() {
	const [filter, setFilter] = useState(false);

  return (
    <div classname="filter"></div>
    <button onclick="{()" ==""> setFilter(!filter} className="filter-button">			</button>
        
  );
}
```



## form

https://www.quackit.com/css/grid/examples/

https://www.quackit.com/html/html_editors/scratchpad/?example=/html/templates/grid/css_grid_form_with_auto_placement

​	for the add page



## dropdown 

https://www.fullstacklabs.co/blog/building-a-responsive-filter-component-on-react

Whenever a user clicks outside of the floating dropdown, they’d expect the modal to close. In order to implement that, we’ll have to enhance our component with a couple of `Refs` and the `useEffect` hook

https://codesandbox.io/s/xly579lllw



## Post-MVP

### catalog display

```
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 30%;
  margin-bottom: 2%; 
  position: relative;
}
```

# CSS

## colors

> D18585
> A19167
> 798286
> 626A70
> 26222B

> D48586
> D5844D
> DDB69C
> 868B7C
> 6B685B

```css
/* CSS - Cascading Style Sheet */
/* http://paletton.com/#uid=55a0X0k73oo4dkA7Wl4gKnWnhq5 */

.color-primary-0 { color: #9C7A8D }	/* Main Primary color */
.color-primary-1 { color: #84727C }
.color-primary-2 { color: #876578 }
.color-primary-3 { color: #994976 }
.color-primary-4 { color: #A72E72 }

.color-secondary-1-0 { color: #C2AB98 }	/* Main Secondary color (1) */
.color-secondary-1-1 { color: #A4988E }
.color-secondary-1-2 { color: #A8917E }
.color-secondary-1-3 { color: #BF885B }
.color-secondary-1-4 { color: #D07D39 }

.color-secondary-2-0 { color: #726C86 }	/* Main Secondary color (2) */
.color-secondary-2-1 { color: #676471 }
.color-secondary-2-2 { color: #605A73 }
.color-secondary-2-3 { color: #554683 }
.color-secondary-2-4 { color: #49338F }

/* As RGBa codes */

.rgba-primary-0 { color: rgba(156,122,141,1) }	/* Main Primary color */
.rgba-primary-1 { color: rgba(132,114,124,1) }
.rgba-primary-2 { color: rgba(135,101,120,1) }
.rgba-primary-3 { color: rgba(153, 73,118,1) }
.rgba-primary-4 { color: rgba(167, 46,114,1) }

.rgba-secondary-1-0 { color: rgba(194,171,152,1) }	/* Main Secondary color (1) */
.rgba-secondary-1-1 { color: rgba(164,152,142,1) }
.rgba-secondary-1-2 { color: rgba(168,145,126,1) }
.rgba-secondary-1-3 { color: rgba(191,136, 91,1) }
.rgba-secondary-1-4 { color: rgba(208,125, 57,1) }

.rgba-secondary-2-0 { color: rgba(114,108,134,1) }	/* Main Secondary color (2) */
.rgba-secondary-2-1 { color: rgba(103,100,113,1) }
.rgba-secondary-2-2 { color: rgba( 96, 90,115,1) }
.rgba-secondary-2-3 { color: rgba( 85, 70,131,1) }
.rgba-secondary-2-4 { color: rgba( 73, 51,143,1) }
/* http://paletton.com */


3DB7BE,717A7A,F6F6F6,27194D,E97D6E
"rgb":[61,183,190],rgb":[113,122,122],"rgb":[246,246,246],"rgb":[39,25,77],"rgb":[233,125,110]

FFD6C9,FFC1B6,F0FAFF,2AADD6,0383C7,1F5571,02294A,D4EDF7,B4E4F4
"rgb":[255,214,201],"rgb":[255,193,182],"rgb":[240,250,255],"rgb":[42,173,214],"rgb":[3,131,199],"rgb":[31,85,113],"rgb":[2,41,74],"rgb":[212,237,247],"rgb":[180,228,244]

```

### Mockup websites from palettes:

https://huemint.com/brand-intersection/#palette=f7ffff-3b3845-98728b-e7b88e
https://huemint.com/website-magazine/#palette=090417-212a3a-f0f0f1-dc994a

## fonts

Lato Header
Nunito Titles
Biryani Body

# Image inspiration





<table>
<tr>
<td>images</td>
<td> </td>
</tr>
<tr>
<td><img src="https://elements-preview-images-0.imgix.net/773d3a00-5dd7-46a2-b666-e2c74d183008?auto=compress%2Cformat&fit=max&w=900&s=f5f25f3ecdb6d989adf46a11f3368fd20" alt="Mojito UI Kit" width=400 /></td>
<td><img src="https://elements-preview-images-0.imgix.net/7a155d8b-c9b3-4824-b453-7daa1c70ead5?auto=compress%2Cformat&fit=max&w=900&s=5447d789ab7a0421b0dffa957dd6682e" alt="Mojito UI Kit" width=400/></td>
</tr>
<tr>
<td><img src="https://elements-preview-images-0.imgix.net/d656fab2-2447-4fdf-a223-4aab92c844a9?auto=compress%2Cformat&fit=max&w=900&s=967698f63719ec33d1454d7d6ed2df9f" alt="Mojito UI Kit" width=400 /></td>
<td><img src="https://elements-preview-images-0.imgix.net/904cbc3b-fa0f-421c-962a-347ad94bb643?auto=compress%2Cformat&fit=max&w=900&s=cfc5c070e69994e73e35cd722045d4de" alt="Mojito UI Kit" width=400 /></td>
</tr>
<tr>
<td><img src="https://elements-preview-images-0.imgix.net/e3725bfd-a549-47a6-9e01-19693ab73e47?auto=compress%2Cformat&fit=max&w=900&s=bdeafbe6d5129c60627be1621fe68a08" alt="Mojito UI Kit" width=400 /></td>
<td><img src="https://cdn.dribbble.com/users/2132618/screenshots/6760780/shot_whyse_dribbble_002_4x.png" width=400 /></td>
</tr>
</table>














