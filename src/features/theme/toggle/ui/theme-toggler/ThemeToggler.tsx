import {
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchThumb,
  SwitchControl,
} from '@ark-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'shared/model';
import { selectTheme, toggle } from 'entities/theme';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector(selectTheme);
  const [checked, setChecked] = useState(theme === 'dark');

  useEffect(
    () => document.querySelector('html')?.setAttribute('class', theme),
    [theme]
  );

  const onChange = (e: { checked: boolean }) => {
    dispatch(toggle());

    setChecked(e.checked);
  };

  return (
    <>
      <Switch
        checked={checked}
        onChange={onChange}
        className="
          flex
          gap-2
          items-center 
        "
      >
        <SwitchInput />
        <SwitchControl asChild>
          <div
            className="
              w-9
              h-5
              px-0.5 
              flex
              items-center
              rounded-full
              cursor-pointer 
              data-[state=unchecked]:bg-zinc-300 
              dark:data-[state=unchecked]:bg-zinc-800 
              data-[state=checked]:bg-green-500
            "
          >
            <SwitchThumb asChild>
              <div
                className="
                  w-4 
                  h-4 
                  rounded-full
                  transition-transform 
                  data-[state=unchecked]:translate-x-0
                  data-[state=checked]:translate-x-full 
                  bg-white
                "
              />
            </SwitchThumb>
          </div>
        </SwitchControl>
        <SwitchLabel
          className="
          text-black 
          dark:text-zinc-100
          "
        >
          Dark mode
        </SwitchLabel>
      </Switch>
    </>
  );
};
