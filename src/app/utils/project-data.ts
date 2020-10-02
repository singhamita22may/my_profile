import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

import { liveServerData } from './data/live-server.data';
import { LiveSassData } from './data/live-sass.data';
import { CakeShopData } from './data/cake-shop.data';
import { MoodysData } from './data/Moodys.data';
import { WeMateData } from './data/we-mate.data';
import { SocialDiaryData } from './data/social-diary.data';
import { SaleItData } from './data/sale-it.data';
import { portfoliloData } from './data/portfolio.data';
import { OShopData } from './data/oshop.data';
import { LiveServerWebExtensionData } from './data/live-server-web-extension.data';
import { LargeNumberFactorialData } from './data/large-number-factorial.data';
import { IndecitionData } from './data/indecition.data';
import { FaceDetectionData } from './data/face-detector-chrome-api.data';
import { unwater } from './data/unwater.data';
import { createFileFolderData } from './data/create-files-folder-on-the-go.data';
import { techFestData } from './data/college-tech-fest.data';
import { bikeShopData } from './data/simple-bike-shopping-site.data';
import { BesnetData } from './data/besnet.data';
import { OnlyOnRentData } from './data/OnlyOnRent.data';
const getAllProject = () => {
  const projects = [
  
    liveServerData,
    LiveSassData,
    portfoliloData,
    OShopData,
    SocialDiaryData,
    CakeShopData,
    SaleItData,
    MoodysData,
    techFestData,
    IndecitionData,
    unwater,
    BesnetData,
    LiveServerWebExtensionData,
    WeMateData,
    createFileFolderData,
    FaceDetectionData,
    bikeShopData,
    LargeNumberFactorialData,
    OnlyOnRentData
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
