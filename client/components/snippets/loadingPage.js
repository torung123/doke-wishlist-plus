import React, { Component } from 'react';
import { SkeletonPage, Layout, SkeletonBodyText, Card, SkeletonDisplayText, TextContainer  } from '@shopify/polaris';

export default class loadingPage extends Component {
  render() {
    return (
        <SkeletonPage secondaryActions={0}>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                    <SkeletonBodyText />
                    </Card>
                    <Card sectioned>
                    <TextContainer>
                        <SkeletonDisplayText size="small" />
                        <SkeletonBodyText />
                    </TextContainer>
                    </Card>
                    <Card sectioned>
                    <TextContainer>
                        <SkeletonDisplayText size="small" />
                        <SkeletonBodyText />
                    </TextContainer>
                    </Card>
                </Layout.Section>
            </Layout>
        </SkeletonPage>
    )
  }
}
