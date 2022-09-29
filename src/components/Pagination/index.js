import {Text, Button} from 'react-native';
import React from 'react';
import Gap from '../Gap';
import tw from 'twrnc';

const Pagination = ({
  page,
  total_page,
  handleGoToFirst,
  handleGoToEnd,
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
      <Button
        title="<<"
        onPress={handleGoToFirst}
        disabled={page <= 1 ? true : false}
      />
      <Gap width={10} />
      <Button
        title="<"
        onPress={handlePrevious}
        disabled={page <= 1 ? true : false}
      />
      <Gap width={10} />
      <Text
        style={tw.style('text-[14px] text-center text-slate-500', {
          fontFamily: 'Poppins-Regular',
        })}>
        Page {page} / {total_page}
      </Text>
      <Gap width={10} />
      <Button
        title=">"
        onPress={handleNext}
        disabled={page === total_page ? true : false}
      />
      <Gap width={10} />
      <Button
        title=">>"
        onPress={handleGoToEnd}
        disabled={page === total_page ? true : false}
      />
    </>
  );
};

export default Pagination;
