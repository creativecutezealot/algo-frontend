import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import SettingsForm from 'src/view/superadmin/settings/SettingsForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import Spinner from 'src/view/shared/Spinner';
import actions from 'src/modules/superadmin/settings/settingsActions';
import selectors from 'src/modules/superadmin/settings/settingsSelectors';
import { useSelector, useDispatch } from 'react-redux';

const SettingsFormPage = (props) => {
  const dispatch = useDispatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );

  const settings = useSelector(selectors.selectSettings);

  useEffect(() => {
    dispatch(actions.doInit());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('settings.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('settings.title')}</PageTitle>

        {initLoading && <Spinner />}

        {!initLoading && settings && (
          <SettingsForm
            settings={settings}
            onCancel={() => getHistory().push('/')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default SettingsFormPage;
