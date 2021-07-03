import { StoryData, StoryblokComponent } from 'storyblok-js-client/types';

export interface Button {
  _uid: string;
  text: string;
  isRound: boolean;
  isLink: boolean;
  link: {
    url: string;
    linktype: 'story';
    // eslint-disable-next-line camelcase
    cached_url: string;
  };
}

export interface FilterButton extends Button {
  isRound: true;
  tag: 'vue' | 'angular' | 'nuxt' | 'vanilla' | 'show-all';
}

export interface Hero {
  _uid: string;
  text: {
    type: 'doc';
    content: Object[];
  };
  buttonList: {
    _uid: string;
    buttons: Button[];
  };
}

export interface Page {
  title: string;
  body: Object;
}
export interface Project extends StoryblokComponent<'MyProject'> {
  title: string;
  description: string;
  demo: {
    url: string;
    linktype: 'url';
  };
  code: {
    url: string;
    linktype: 'url';
  };
  media: string;
}

export interface ProjectFilter {
  _uid: string;
  buttonList: FilterButton[];
}

export interface ProjectList {
  _uid: string;
  filter: ProjectFilter;
  body: string[];
}

export interface MyProjectBlok
  extends StoryData<StoryblokComponent<'MyProject'> & Project> {}
