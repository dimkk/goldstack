import React from 'react';
import TemplateFeature, { TemplateFeatureProps } from './TemplateFeature';

import Head from 'next/head';
import TextSection, { TextSectionProps } from './TextSection';
import TemplateCallToAction from './TemplateCallToAction';

export interface TemplateProps {
  title: string;
  hero: TextSectionProps;
  features: TemplateFeatureProps[];
}

const Template = (props: TemplateProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <TextSection {...props.hero}></TextSection>
      {props.features.map((feature, idx) => {
        return <TemplateFeature {...feature} key={idx}></TemplateFeature>;
      })}
      {props.hero.action && (
        <TemplateCallToAction action={props.hero.action}></TemplateCallToAction>
      )}
    </>
  );
};

export default Template;
